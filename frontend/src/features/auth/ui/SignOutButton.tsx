import { Form } from "react-router-dom";
import { authProvider } from "../../../app/auth";

export function SignOut() {
  const handleLogout = async () => {
    await authProvider.signout();
  };

  return (
    <Form
      action={handleLogout as unknown as string}
    >
      <button type="submit">Sign Out</button>
    </Form>
  )
}
