"use client"
import React from 'react'
import Banner from './_components/Banner'
import { useSession } from 'next-auth/react'
import WritePost from './_components/WritePost'

function Home() {

  const {data: session} = useSession()

  return (
    <div className='p-5 px-10'>
      {!session ? <Banner/>
      :
       <WritePost />  
      }
    </div>
  )
}

export default Home