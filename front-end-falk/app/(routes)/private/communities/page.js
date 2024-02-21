'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Banner from './_components/Banner';
import CommunityList from './_components/CommunityList';
import { getAllCommunity } from '@/services/communityFunctions';

function page() {

    const [communities, setCommunities] = useState([])

    const fecthCommunities = async () => {
        let comm = await getAllCommunity()
        setCommunities(comm.data.data)
    }

    useEffect(() => {
      fecthCommunities()
    },[])
    
    return (
        <div className='p-5 px-10'>
            <Banner updateCommList={fecthCommunities}/>
            <CommunityList communityList={communities}/>
        </div>
    )
}

export default page