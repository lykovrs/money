import { redirect } from 'react-router-dom';
import { authProvider } from '../../../app/auth';

export async function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}
