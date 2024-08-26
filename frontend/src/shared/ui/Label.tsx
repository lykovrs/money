import clsx from "clsx";
import {Label, LabelProps} from "@headlessui/react";

export default function MyLabel({...props }:  LabelProps) {
  return (
    <Label {...props} className={clsx('block text-black', props.className)}  />
  )
}
