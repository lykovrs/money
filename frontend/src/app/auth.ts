import axios from 'axios';
import {
  AuthControllerSigninResponse,
  AuthService,
} from '../shared/api/requests';

interface AuthProvider {
  isAuthenticated: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): Promise<void>;
}

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

const access_token = localStorage.getItem('access_token');

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

// /**
//  * This represents some generic auth provider API, like Firebase.
//  */
export const authProvider: AuthProvider = {
  isAuthenticated: Boolean(access_token),
  async signIn(username: string, password: string) {
    debugger;
    const resp = (await AuthService.authControllerSignin({
      requestBody: { username, password },
    })) as { access_token: string };

    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${resp.access_token}`;

    localStorage.setItem('access_token', resp.access_token);

    authProvider.isAuthenticated = true;
  },
  async signOut() {
    localStorage.removeItem('access_token');
    authProvider.isAuthenticated = false;
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    window.location.reload();
  },
};
