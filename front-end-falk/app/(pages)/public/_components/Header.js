import { Menu, MenuSquare } from 'lucide-react'
import React from 'react'
import PublicMenuList from '@/app/_utils/PublicMenuList'
import Image from 'next/image'
import Link from 'next/link'

function Header({toggleSideBar}) {
  return (
    <div className='p-5 flex justify-between md:justify-end shadow-sm bg-white items-center'>
        <Menu className='md:hidden h-7 w-7
         text-slate-500 cursor-pointer'
         onClick={()=>toggleSideBar()}
         />
         <div className='flex w-full lg:mx-40 justify-between hidden md:flex'>
          <Image src='/logo.svg' alt='logo'
            width={280}
    
            height={200}/>
          <div className='flex items-center gap-10'>
            {
              PublicMenuList.map((item,index)=>(  
                <Link href={item.path} className='hover:text-blue-600 max-w-screen-md:hidden' key={index}>
                      {item.name}</Link>
                    ))
                  }
          </div>
        </div>
    </div>
  )
}

export default Header