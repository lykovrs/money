import React from "react"
import clsx from "clsx";
import {Fieldset, FieldsetProps} from "@headlessui/react";

export default function MyFieldset({...props }:  FieldsetProps) {
  return (
    <Fieldset {...props} className={clsx('space-y-8', props.className)}  />
  )
}
