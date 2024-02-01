import { getAllPost } from '@/services/postFunctions'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

function PostList({postList}) {

    return (
        <div>{postList && postList.map((item, index) => (
            <div key={index}>
                <PostItem post={item} />
            </div>
        ))}</div>
    )
}

export default PostList