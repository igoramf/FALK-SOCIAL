import Image from 'next/image'
import React from 'react'
import userImg from '../../../../../public/sem-foto.jpg'
import moment from 'moment'

function PostItem( {post} ) {

  return (
    <div className='p-5 border rounded-lg my-5'>
        <div className='flex gap-2 items-center'>
            <Image src={userImg} alt='user-image' width={35} height={35} 
            className='rounded-full'/>
            <div>
                <h2 className='font-bold'>{post.createdBy?.name}</h2>
                <h2 className='text-[12px] text-gray-400'>{moment(post?.createdAt).format('DD MMM YY | hh:mm A')}</h2>
            </div>
        </div>
        <div className=' bg-slate-100 p-3 mt-4 rounded-lg'>
            <h2 className='text-[14px]'>{post.text}</h2>
        </div>
        <div className='flex gap-8 text-gray-500 mt-4'>
            <div className='flex flex-row gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <h2>234 likes</h2>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <h2>234 Comentários</h2>
            </div>
        </div>
    </div>
  )
}

export default PostItem