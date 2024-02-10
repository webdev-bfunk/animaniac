import React from 'react'
import Link from 'next/link'
const NavMenu = () => {
  return (
    <ul className='flex justify-center items-center gap-4 text-2xl'>
        
        <li className="hover:bg-slate-700  px-3 py-1 rounded-md">
            <Link href="/">About</Link>
        </li>
        <li className="hover:bg-slate-700  px-3 py-1 rounded-md">
            <Link href="/">Services</Link>
        </li>
        <li className="hover:bg-slate-700  px-3 py-1 rounded-md">
            <Link href="/">Portfolio</Link>
        </li>
        
    </ul>
  )
}

export default NavMenu