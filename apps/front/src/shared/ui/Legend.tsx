import React from "react"
import clsx from "clsx";
import {Legend, LegendProps} from "@headlessui/react";

export default function MyLegend({...props }:  LegendProps) {
  return (
    <Legend {...props} className={clsx('text-lg font-bold text-black', props.className)}  />
  )
}
