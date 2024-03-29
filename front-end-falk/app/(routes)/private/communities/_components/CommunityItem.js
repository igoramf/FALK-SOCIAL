import React from 'react'
import userImg from '../../../../../public/sem-foto.jpg'
import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/navigation'

function CommunityItem( { content } ) {


  const router = useRouter()


  const routerToDetails = () => {
    router.push(`communities/${content.communityName}`)
  }

  const profileImg = content?.profile_pic ? content?.profile_pic : userImg.src

  return (
    <div className='p-5 border rounded-lg my-5 hover:cursor-pointer' onClick={routerToDetails}>
        <div className='flex gap-2 items-center'>
            <img src={profileImg} alt='user-image' width={35} height={35} className="rounded-full"  style={{ maxWidth: '100%', maxHeight: '100%' }}/>
            <div>
                <h2 className='font-bold'>{content.communityName}</h2>
                <h2 className='text-[14px] text-gray-400'>{content.description}</h2>
            </div>
        </div>
    </div>
  )
}

export default CommunityItem