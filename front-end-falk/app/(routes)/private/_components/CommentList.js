import Image from 'next/image'
import React, { useState } from 'react'
import userImg from '../../../../public/sem-foto.jpg'
import { MoreVertical, Trash } from 'lucide-react'
import { useSession } from 'next-auth/react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button';
import { deleteComment } from '@/services/commentsFunctions';
import { useToast } from '@/components/ui/use-toast';
  

function CommentList( { comentList , updatePostList} ) {

    const { user: user } = useSession().data || {};
    const { toast } = useToast();

    const [comentListData, setCommentListData] = useState(comentList);

    const deleteComm = async (comment) => {
        const result = comentListData.filter(item => item._id != comment._id)
        setCommentListData(result);

        const response = await deleteComment(user.authToken, comment._id)

        if(response.status == 201){
            toast({
                title: "Apagado!",
                description: "Comentário deletado com sucesso.",
                variant: "success"
            })
            updatePostList()
        }
    }

    

    return (
        <div>
            {
                comentListData.map((item, index) => (
                    <div className='flex p-3 border rounded-lg items-center justify-between m-2'>
                        <div className='flex items-center gap-3'>
                            <Image src={userImg} width={30} height={30} alt='user-image'
                            className='rounded-full'/>
                            <h2 className='bg-slate-100 p-2 rounded-full'>{item.text}</h2>
                        </div>
                        {item.createdBy._id == user.userId &&
                        <Popover>
                        <PopoverTrigger>
                            <MoreVertical className='h-5 w-5'/>    
                        </PopoverTrigger>
                        <PopoverContent className="w-auto">
                            <Button 
                            className="w-full flex gap-2" variant="outline"
                            onClick={() => deleteComm(item)}
                            >
                                <Trash/> Deletar
                            </Button>
                        </PopoverContent>
                      </Popover>}
                    </div>
                ))
            }
        </div>
    )
}

export default CommentList