"use client"
import { getOneCommunity, getPostsByCommunity } from '@/services/communityFunctions';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import CommunityDetails from './_components/CommunityDetails';
import PostList from '../../_components/PostList';
import { getAllPost } from '@/services/postFunctions';
import WritePost from '../../_components/WritePost';

function page( { params } ) {

  const { user: user } = useSession().data || {};

  const [comm, setComm] = useState(null)

  const fetchComm = async () => {
    const community = await getOneCommunity(params.username)
    setComm(community.data.data)
  }

  useEffect(() => {
    if (user) {
      fetchComm();
    }
  }, [user]);
  
  
  const [postList, setPostList] = useState([])
  
  
  const getPosts = async () => {
    const posts = await getPostsByCommunity(params.username)
    setPostList(posts.data.data)
  }
  
  useEffect(() => {
    if (user && comm) {
      getPosts();
    }
  },[user, comm]);

  return (
    <div>
      <CommunityDetails content={comm}></CommunityDetails>
      <div className='p-5'>
        {user && <WritePost getAllPost={getPosts} community={comm}></WritePost>}
        <PostList postList={postList} updatePostList={getPosts}></PostList>
      </div>
    </div>
  )
}

export default page
