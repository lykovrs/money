import { redirect } from 'react-router-dom';
import { authProvider } from '../../../app/auth';

export async function loginLoader() {
  if (authProvider.user) {
    return redirect('/');
  }
  return null;
}
