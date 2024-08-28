import { Button, Field, Fieldset, Input, Label, Legend, Textarea } from '../../../shared'
import { Form } from 'react-router-dom'

type Props = {
  isLoading: boolean;
  error?: string | null;
}

export default function RegisterForm({error, isLoading}: Props) {

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form method='post' className="flex flex-col justify-center align-middle">
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
      </Form>
    </div>
  )
}
