"use client"
import React, { useEffect, useState } from 'react'
import Banner from './_components/Banner'
import { useSession } from 'next-auth/react'
import WritePost from './_components/WritePost'
import PostList from './_components/PostList'
import { getAllPost } from '@/services/postFunctions'

function Home() {

  const { user: user } = useSession().data || {};

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
    <div className='p-5 px-10'>
      {!user ? <Banner/>
      :
       <WritePost getAllPost={() => getPosts()}/>  
      }

      <PostList postList={postList} updatePostList={() => getPosts()}/>
    </div>
  )
}

export default Home