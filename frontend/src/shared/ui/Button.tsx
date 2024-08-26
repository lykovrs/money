import clsx from "clsx";
import {Button, ButtonProps} from "@headlessui/react";

interface Props extends ButtonProps{
  isLoading?: boolean
}

export default function MyButton({isLoading, children, ...props }: Props) {
  return (
    <Button {...props} className={clsx('rounded-full px-6 py-2 text-purple-100  shadow-md bg-teal-80 shadow-purple-100/40 active:bg-purple-100 active:text-purple-20 hover:bg-teal-100 disabled:text-purple-20 disabled:bg-purple-40', props.className)} disabled={isLoading} >
      <>
        {children}
      </>

      {isLoading ? 'Loading...' : ''}
    </Button>
  )
}
