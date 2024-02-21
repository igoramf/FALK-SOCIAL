"use client"
import { getOneCommunity } from '@/services/communityFunctions';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import CommunityDetails from './_components/CommunityDetails';
import PostList from '../../_components/PostList';
import { getAllPost } from '@/services/postFunctions';

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

  const [postList, setPostList] = useState([])
  
  useEffect(() => {
      if(user){
          getPosts();
      }
  },[user])

  const getPosts = async () => {
      const posts = await getAllPost(user.authToken);
      setPostList(posts.data.data)
  }


  return (
    <div>
      <CommunityDetails content={comm}></CommunityDetails>
      <div className='p-3'>
        <PostList postList={postList}></PostList>

      </div>
    </div>
  )
}

export default page
