import { getAllPost } from '@/services/postFunctions'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

function PostList({postList}) {

    return (
        <div>{!postList ? postList.map((item, index) => (
            <div key={index}>
                <PostItem post={item} />
            </div>
        )):
            <div>
                {[1,2,3].map((item, index) => (
                    <div className='h-[200px] w-full bg-slate-200 animate-pulse my-5 rounded-lg'> 
                    </div>
                ))}
            </div>
        
        
        }
        
        
        </div>
    )
}

export default PostList