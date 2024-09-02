import type { LoaderFunctionArgs } from 'react-router-dom';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import RootLayout from './layout';
import { AchievementsPage } from '../pages/achievement';
import { LoginPage } from '../pages/auth';
import { AboutPage } from '../pages/about';
import { loginLoader } from '../pages/auth';
import { authProvider } from './auth';
import { WishesPage } from '../pages/wish';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader() {
      return { user: authProvider.user };
    },
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: AboutPage,
      },
      {
        path: 'login',
        action: loginAction,
        loader: loginLoader,
        Component: LoginPage,
      },
      {
        path: 'achievement',
        loader: protectedLoader,
        Component: AchievementsPage,
      },
      {
        path: 'wish',
        loader: protectedLoader,
        Component: WishesPage,
      },
    ],
  },
  {
    path: '/logout',
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      // await authProvider.signout();
      return redirect('/');
    },
  },
]);

async function loginAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;
  debugger;
  // Validate our form inputs and return validation errors via useActionData()
  if (!username || !password) {
    return {
      error: 'You must provide a username and password to log in',
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await authProvider.signIn(username, password);
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: 'Invalid login attempt',
    };
  }

  const redirectTo = formData.get('redirectTo') as string | null;
  return redirect(redirectTo || '/');
}

function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!authProvider.user) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  return null;
}

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}
