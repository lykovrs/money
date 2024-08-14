'use client'
import React, {  FormEvent } from 'react'
import {Button, Input, Label, Legend, Field, Fieldset} from "../../../shared";
import {useAuthControllerSignin, } from "../../../shared/api/apiComponents";

export default function LoginForm() {
  const {mutateAsync, error, isError} = useAuthControllerSignin()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
      const formData  = new FormData(event.currentTarget)
      await mutateAsync({body: {username: formData.get('username'), password: formData.get('password')} as unknown as undefined}, {})
  }

  return (
      <form onSubmit={onSubmit} className="flex flex-col justify-center align-middle">
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
