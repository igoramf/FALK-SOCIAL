'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Banner from './_components/Banner';
import CommunityList from './_components/CommunityList';
import { getAllCommunity } from '@/services/communityFunctions';
import Loading from "../../../../public/loading.svg"
import Image from 'next/image';

function page() {

    const [communities, setCommunities] = useState([])
    const [loading, setLoading] = useState(true)

    const fecthCommunities = async () => {
        let comm = await getAllCommunity().finally(() => setLoading(false))
        setCommunities(comm.data.data)
    }



    useEffect(() => {
      fecthCommunities()
    },[])
    
    return (
        <div className='p-5 px-10'>
            <Banner updateCommList={fecthCommunities}/>
            {loading ?
                <div className='flex items-center justify-center h-96  w-full'>
                    <Image src={Loading} height={70}/>   
                </div>
                :
                <CommunityList communityList={communities}/>
            }
        </div>
    )
}

export default page