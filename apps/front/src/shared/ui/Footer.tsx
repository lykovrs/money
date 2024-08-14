import React from "react"
import {navigationItems} from "../config/navigation";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className='bg-purple-100 text-white h-[82px] flex align-middle items-center font-medium text-lg gap-x-1 pr-16 pl-16'>
      {navigationItems.map(({id, title, path}) => {
          return <Link key={id} href={path} >{title}</Link>
        })}
    </footer>
  )
}
