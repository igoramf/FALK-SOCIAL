import Image from 'next/image'
import React from 'react'
import userImg from '../../../../../public/sem-foto.jpg'
import { MoreVertical } from 'lucide-react'

function CommentList( { comentList } ) {
  return (
    <div>
        {
            comentList.map((item, index) => (
                <div className='flex p-3 border rounded-lg items-center justify-between m-2'>
                    <div className='flex items-center gap-3'>
                        <Image src={userImg} width={30} height={30} alt='user-image'
                        className='rounded-full'/>
                        <h2 className='bg-slate-100 p-2 rounded-full'>{item.text}</h2>
                    </div>
                    <MoreVertical className='h-5 w-5'/>
                </div>
            ))
        }
    </div>
  )
}

export default CommentList