"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {

  const { data: session } = useSession()

  const router = useRouter()

  useEffect(() => {
    if(session){
      router.push('/private/home')
    }else{
      router.push('/public/signIn')
    }
  })
  
  return (
    <div>
    
    </div>
  )
}
