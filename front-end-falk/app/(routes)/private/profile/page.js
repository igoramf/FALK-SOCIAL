"use client"
import React, { useEffect } from 'react'
import Loading from "../../../../public/loading.svg"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function page() {
    
  const { user: user } = useSession().data || {};
  
  const router = useRouter()

  const routerToDetails = () => {
    router.push(`profile/${user.user}`)
  }

  useEffect(() => {
    if(user){
        routerToDetails()
    } 
  },[user])

  return (
    <div className='flex flex-col items-center h-96 justify-end'><Image src={Loading} height={80}></Image></div>
  )
}

export default page