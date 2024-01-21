"use client"
import React from 'react'
import Header from './_components/Header'
import { useState } from 'react'
import SideNav from './_components/SideNav'

function layout({ children }) {
  const [toggleSideBar, setToggleSideBar] = useState(false) 


    return (
      <div className='flex justify-center flex-col h-screen'>
        {toggleSideBar &&
          <div className='bg-white absolute md:hidden md:block h-screen 
          animate-in duration-700'>
            <SideNav toggleSideBar={() => setToggleSideBar(false)} />
          </div>
        }
        <Header toggleSideBar={() => setToggleSideBar(true)}></Header>
          {children}
      </div>  
    )
  }
  
  export default layout