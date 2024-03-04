"use client"
import React, { useEffect, useState } from 'react'
import ProfileDetails from './_components/profileDetails'
import { getUser, getUserPosts } from '@/services/userFunctions'
import WritePost from '../../_components/WritePost'
import PostList from '../../_components/PostList'

function page( { params } ) {

  const [user, setUser] = useState([])
  const [postList, setPostList] = useState([])

  const fecthUser = async () => {
    const userData = await getUser(params.id)
    setUser(userData.data)
  }

  useEffect(() => {
    fecthUser()
  },[params])

  const getPosts = async () => {
    const userPosts = await getUserPosts(params.id)
    setPostList(userPosts)
  }
  

  return (
    <div>
      <ProfileDetails content={user}/>
      <div className='p-5'>
        {user && <WritePost getAllPost={getPosts} ></WritePost>}
        <PostList postList={postList} updatePostList={getPosts}></PostList>
      </div>
    </div>
  )
}

export default page