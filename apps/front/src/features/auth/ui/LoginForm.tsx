import { signIn } from "../../../auth"
import React, {  FormEvent } from 'react'
import {Button, Input, Label, Legend, Field, Fieldset} from "../../../shared";
import {useAuthControllerSignin, } from "../../../shared/api/apiComponents";

export default function LoginForm() {
  return (
    <form
      action={async (formData) => {
        "use server"
        try {
          const result = await signIn("credentials", formData, {
            redirectTo: '/'
          })
        } catch (e) {
          debugger
        }
      }}
     className="flex flex-col justify-center align-middle">
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
            <Button  className="mt-4 block" isLoading={undefined} type={'submit'}>Submit</Button>
          </Field>
        </Fieldset>
      </form>
  )
}
