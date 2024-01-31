import { Button } from '@/components/ui/button'
import { LoginDropdown } from '@/components/ui/loginDropdown'
import { Menu, MenuSquare } from 'lucide-react'
import React from 'react'

function Header({toggleSideBar}) {
  return (
    <div className='p-5 flex justify-between md:justify-end shadow-sm bg-white items-center'>
        <Menu className='md:hidden h-7 w-7
         text-slate-500 cursor-pointer'
         onClick={()=>toggleSideBar()}
         />
        <LoginDropdown />
    </div>
  )
}

export default Header