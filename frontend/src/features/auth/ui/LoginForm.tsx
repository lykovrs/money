// import { signIn } from "../../../auth"
import { Form } from "react-router-dom";
import {Button, Input, Label, Legend, Field, Fieldset} from "../../../shared";

type Props = {
  from: string;
  isLoggingIn: boolean;
  error?: string | null;
}

export default function LoginForm({from, isLoggingIn, error}: Props) {
  return (
    <Form method="post" replace
     className="flex flex-col justify-center align-middle">
     <p>You must log in to view the page at {from}</p>
     {error ? (
      <p style={{ color: "red" }}>{error}</p>
    ) : null}
        <Fieldset className='max-w-xl'>
          <Legend>Login user</Legend>
          <Field>
            <Label>Username</Label>
            <Input className="mt-1 block" name="username" />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input className="mt-1 block" name="password" />
          </Field>

          <Field className='w-full flex justify-end'>
            <Button  className="mt-4 block" isLoading={isLoggingIn} type={'submit'}>Submit</Button>
          </Field>
        </Fieldset>
      </Form>
  )
}
