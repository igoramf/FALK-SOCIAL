import React from 'react'
import userImg from '../../../../../public/sem-foto.jpg'
import Image from 'next/image'
import moment from 'moment'

function CommunityItem() {
  return (
    <div className='p-5 border rounded-lg my-5 hover:cursor-pointer'>
        <div className='flex gap-2 items-center'>
            <Image src={userImg} alt='user-image' width={35} height={35} 
            className='rounded-full'/>
            <div>
                <h2 className='font-bold'>Comunidade do amor</h2>
                <h2 className='text-[14px] text-gray-400'>comunidade otima para fazer amigos</h2>
            </div>
        </div>
    </div>
  )
}

export default CommunityItem