'use client'
import { useSession } from 'next-auth/react';
import React from 'react'
import Banner from './_components/Banner';
import CommunityList from './_components/CommunityList';

function page() {

    const { user: user } = useSession().data || {};
    
    return (
        <div className='p-5 px-10'>
            <Banner />
            <CommunityList />
        </div>
    )
}

export default page