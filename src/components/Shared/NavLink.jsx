'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLink = ({children, href}) => {
    const path = usePathname();
  return (
    <Link href={href} className={`${path === href ? "text-primary font-bold" : ""}`}>{children}</Link>
  )
}

export default NavLink