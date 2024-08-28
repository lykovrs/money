import { useLocation, useNavigation, useActionData } from "react-router-dom";
import {LoginForm} from "../../../features/auth";

export default function LoginPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("username") != null;

  const actionData = useActionData() as { error: string } | undefined;
  
  return <section className="flex justify-center align-middle h-full">
    <LoginForm from={from} isLoggingIn={isLoggingIn} error={actionData?.error} />
  </section>
}