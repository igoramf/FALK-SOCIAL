"use client"
import { getOneCommunity } from '@/services/communityFunctions';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import CommunityDetails from './_components/CommunityDetails';

function page( { params } ) {

  const { user: user } = useSession().data || {};

  const [comm, setComm] = useState(null)

  const fetchComm = async () => {
    const community = await getOneCommunity(user.authToken, params.id)
    setComm(community.data.data)
  }

  useEffect(() => {
    fetchComm()
  },[])


  return (
    <div>
      <CommunityDetails content={comm}></CommunityDetails>

    </div>
  )
}

export default page
