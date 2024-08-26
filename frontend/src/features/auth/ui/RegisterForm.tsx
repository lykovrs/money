import { useState, FormEvent } from 'react'
import { Button, Field, Fieldset, Input, Label, Legend, Textarea } from '../../../shared'
// import clsx from "clsx";

export default function RegistrForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }

      // Handle response if necessary
      // const data = await response.json()
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      // setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  // border-radius: 10px;
  // background: rgba(255, 255, 255, 0.85);
  // box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);
  // backdrop-filter: blur(6px);

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={onSubmit} className="flex flex-col justify-center align-middle">
        <Fieldset className='max-w-xl'>
          <Legend>Login user</Legend>
          <Field>
            <Label>First Name</Label>
            <Input className="mt-1 block" name="firstName" />
          </Field>
          <Field>
            <Label>Last Name</Label>
            <Input className="mt-1 block" name="lastName" />
          </Field>
          <Field>
            <Label>Email</Label>
            <Input className="mt-1 block" name="email" />
          </Field>
          <Field>
            <Label>Delivery notes</Label>
            <Textarea className="mt-1 block" name="notes" />
          </Field>

          <Field className='w-full flex justify-end'>
            <Button  className="mt-4 block" isLoading={isLoading} type={'submit'}>Submit</Button>
          </Field>
        </Fieldset>
      </form>
    </div>
  )
}
