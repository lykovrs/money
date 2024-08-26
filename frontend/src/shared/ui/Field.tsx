import clsx from "clsx";
import {Field, FieldProps} from "@headlessui/react";

export default function MyField({...props }:  FieldProps) {
  return (
    <Field {...props} className={clsx('', props.className)}  />
  )
}
