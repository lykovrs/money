import React from "react"
import clsx from "clsx";
import {Textarea, TextareaProps} from "@headlessui/react";

export default function MyTextarea({...props }:  TextareaProps) {
  return (
    <Textarea {...props} className={clsx('rounded-md px-6 py-2 text-purple-100  shadow-md bg-teal-40 shadow-purple-100/40 active:bg-teal-80 hover:bg-teal-80 disabled:text-purple-20 disabled:bg-purple-40', props.className)}  />
  )
}
