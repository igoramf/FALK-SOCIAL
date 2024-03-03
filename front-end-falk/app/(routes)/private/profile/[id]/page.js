"use client"
import React, { useEffect, useState } from 'react'
import ProfileDetails from './_components/profileDetails'
import { getUser } from '@/services/userFunctions'

function page( { params } ) {

  const [user, setUser] = useState([])

  
  
  const fecthUser = async () => {
    const userData = await getUser(params.id)
    setUser(userData)
  }

  useEffect(() => {
    fecthUser()
  },[params])

  return (
    <div>
      <ProfileDetails content={user}/>
    </div>
  )
}

export default page