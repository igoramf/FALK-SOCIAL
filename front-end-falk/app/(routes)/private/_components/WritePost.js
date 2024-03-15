"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { Image, Send, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPost } from '@/services/postFunctions';
import { useState }  from "react";
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';


function WritePost({ getAllPost, community }) {
    const { user: user } = useSession().data || {};
    const { toast }  = useToast();

    const [text, setText] = useState(null);
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)


    const onCreatePost = async () => {
        let data = {
            text: text,
            createdBy: user.userId
        }

        if(community) {
            data["community"] = community._id
        }


        let response = await createPost(user.authToken, data);
        
        if(response.status == 201){
            setText("");
            getAllPost();
            toast({
                title: "Boaaa!",
                description: "Post Salvo com sucesso",
                variant: "success",

            })
        }else{
            toast({
                title: "Erro :/",
                description: "Erro ao criar post",
                variant: "destructive" 
            })
        }
    }

    const handleImage = (image) => {
        const reader = new FileReader(); 
  
        reader.onload = () => {
          setImageUrl(reader.result); 
        };

        if (image) {
            setFile(image); 
            reader.readAsDataURL(image); 
        }
   
    }

    return (
        <div>
            <h2 className='text-[30px] font-medium  text-gray-600'>Olá, {user?.name}</h2>
            <h2 className='text-gray-400'>Compartilhe o que há de novo com você;</h2>
            <div className='p-3 border rounded-lg mt-5 bg-slate-100'>
                <h2>Faça um post</h2>
                <div className='p-4 bg-white rounded-lg mt-2'>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Conta as novas" className='outline-none w-full'></textarea>
                    {imageUrl &&
                        <div className='flex items-center justify-center h-96 w-full bg-slate-100 p-3'>
                            <img src={imageUrl} className='h-auto max-h-full max-w-full' ></img>
                        </div>
                
                    }
                </div>
                <div className='mt-4 flex flex-row justify-between'>
                    <div className='flex flex-row gap-5'>
                        <label htmlFor='picture_input' className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg'>
                            <Image /> Foto
                        </label>
                        <Input className="hidden" accept="image/*" multiple={false} id="picture_input" type="file" onChange={(e) => handleImage(e.target.files[0])}></Input>    
                        {/* {Não teremos video por enquanto} */}
                        {/* <h2 className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg' ><Video/> Video</h2> */}
                    </div>
                    <Button onClick={onCreatePost} disabled={!text} className="rounded-xl gap-2 hover:bg-blue-200"><Send />Publicar</Button>
                </div>
            </div>
        </div>
    )
}

export default WritePost