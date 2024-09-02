import { useFetcher } from 'react-router-dom';
import { HoveredLink } from './NavbarMenu';
import { useUsersServiceUsersControllerMe } from '../api/queries';
import { authProvider } from '../../app/auth';

export function AuthStatus() {
  let fetcher = useFetcher();
  const { data: user } = useUsersServiceUsersControllerMe();

  const handleSignOut = async () => {
    await authProvider.signOut();
  };

  if (!user) {
    return (
      <div>
        <p>You are not logged in.</p>
        <HoveredLink to="/login">Login</HoveredLink>
      </div>
    );
  }

  let isLoggingOut = fetcher.formData != null;

  return (
    <div>
      <p>Welcome {user.username}!</p>
      <fetcher.Form method="post" action="/logout">
        <button onClick={handleSignOut} disabled={isLoggingOut}>
          {isLoggingOut ? 'Signing out...' : 'Sign out'}
        </button>
      </fetcher.Form>
    </div>
  );
}
