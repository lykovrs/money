import axios from 'axios';
import {
  AuthControllerSigninResponse,
  AuthService,
  UsersControllerMeResponse,
  UsersService,
} from '../shared/api/requests';
import { QueryClient } from '@tanstack/react-query';
import { getQueryClient } from './get-query-client';

export const refreshAccessTokenFn = async () => {
  const response = await axios.get<AuthControllerSigninResponse>(
    'auth/refresh'
  );
  return response.data;
};

axios.defaults.baseURL = import.meta.env.VITE_API;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

axios.defaults.headers.common['Content-Type'] = 'application/json';

class Auth {
  private _queryClient: QueryClient;
  private static _instance?: Auth;
  public user: UsersControllerMeResponse | null = null;

  constructor() {
    if (Auth._instance)
      throw new Error('Use Singleton.instance instead of new.');
    Auth._instance = this;
    this._queryClient = getQueryClient();
    this.init();
  }

  static get instance() {
    return Auth._instance ?? (Auth._instance = new Auth());
  }

  async init() {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      this.user = await UsersService.usersControllerMe();

      this._queryClient.setQueryData(
        ['UsersServiceUsersControllerMe'],
        this.user
      );
    }
  }

  async signIn(username: string, password: string) {
    debugger;
    const resp = (await AuthService.authControllerSignin({
      requestBody: { username, password },
    })) as { access_token: string };

    localStorage.setItem('access_token', resp.access_token);

    this.init();
  }
  async signOut() {
    localStorage.removeItem('access_token');
    this.user = null;
    window.location.reload();
  }
}

export const authProvider = new Auth();
