import Image from 'next/image'
import React, { useState } from 'react'
import sem_foto from '../../../../public/sem-foto.jpg'
import moment from 'moment'
import { useSession } from 'next-auth/react';
import { likePost } from '@/services/postFunctions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { createComment } from '@/services/commentsFunctions';
import { useToast } from '@/components/ui/use-toast';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import CommentList from './CommentList';

function PostItem( { post, updatePostList } ) {

    const { user: user } = useSession().data || {};
    const { toast } = useToast();

    const [commentInput, setCommentInput] = useState()

    const checkIsUserLike = ( postLikes ) => {
        return postLikes.find(item => item?._id == user.userId)
    }


    const onLikeClick = async ( isLike, postId ) => {
        const data = {
            userId: user.userId,
            isLike: isLike
        }

        const response = await likePost(user.authToken, postId, data);

        updatePostList()
    }

    const addComment = async () => {
        const data = {
            text: commentInput,
            createdBy: user.userId,
            postId: post._id
        }
        
        const response = await createComment(user.authToken, data);

        if(response.status == 201){
            toast({
                title: "Comentando tudo ein!!",
                description: "Seu comentário foi criado com sucesso",
                variant: "success"
            })
            setCommentInput("")
        }
        updatePostList()

    }

    const profileImg = post?.createdBy.profile_pic ? post?.createdBy.profile_pic : sem_foto.src


    return (
        <div className='p-5 border rounded-lg my-5'>
            <div className='flex gap-2 items-center'>
                <img src={profileImg} alt='user-image' width={35} height={35} 
                className='rounded-full' style={{ maxWidth: '100%', maxHeight: '100%' }}/>
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
                    {!checkIsUserLike(post?.likes) ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" 
                        onClick={() => onLikeClick(true, post._id)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500"
                        onClick={() => onLikeClick(false, post._id)}
                        >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    }
                    <h2>{post?.likes.length} likes</h2>
                </div>
                <AlertDialog>
                    <AlertDialogTrigger>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <h2>{post?.comments.length} Comentários</h2>
                        </div>
                </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle className="flex justify-between items-center">Comentários <AlertDialogCancel>X</AlertDialogCancel></AlertDialogTitle>
                        <AlertDialogDescription>
                            <CommentList comentList={post?.comments} updatePostList={updatePostList}/>
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
            

            
            



            {/* COMMENT SECTION*/}
            {user && (
                <div className='mt-5 flex gap-4 items-center'>
                    <hr className='mb-5'></hr>
                    <img src={profileImg} width={30} height={30} alt="user-image"
                    className='rounded-full '
                    />
                    <Input 
                    type="text" 
                    placeholder="Faça um comentário"
                    value={commentInput}
                    variant="comment"
                    onChange={(e) => setCommentInput(e.target.value)} 
                    />
                    <Button 
                    className="bg-blue-400 text-white p-2 h-8 w-10 rounded-xl hover:bg-blue-600" 
                    disabled={!commentInput}
                    onClick={addComment}
                    ><Send /></Button>
                </div>
            )}
        </div>
    )
}

export default PostItem