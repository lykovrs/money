'use client'
import React, { useState, FormEvent } from 'react'
import {Button, Field, Fieldset, Input, Label, Legend, Select, Textarea} from "@headlessui/react";
import clsx from "clsx";

export default function LoginPage() {
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
      const data = await response.json()
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message)
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
      <form onSubmit={onSubmit}>
        <Fieldset className="space-y-8">
          <Legend className="text-lg font-bold">Login user</Legend>
          <Field>
            <Label className="block">First Name</Label>
            <Input className="mt-1 block" name="firstName" />
          </Field>
          <Field>
            <Label className="block">Last Name</Label>
            <Input className="mt-1 block" name="lastName" />
          </Field>
          <Field>
            <Label className="block">Email</Label>
            <Input className="mt-1 block" name="email" />
          </Field>

          <Field>
            <Label className="block">Country</Label>
            <Select className="mt-1 block" name="country">
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
          </Field>
          <Field>
            <Label className="block">Delivery notes</Label>
            <Textarea className="mt-1 block" name="notes" />
          </Field>
        </Fieldset>
        <Button className={clsx('px-2 py-2 shadow-md shadow-purple-100/40 text-purple-100')} type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}
