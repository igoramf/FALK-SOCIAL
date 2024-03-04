import React, { useState } from 'react'
import sem_foto from "../../../../../../public/sem-foto.jpg"
import Image from 'next/image'
import { CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button';

function ProfileDetails( {content} ) {

    const [selecionado, setSelecionado] = useState('posts');

    const data = content.data

    const dateToText = (date) => {
        const data = new Date(date);
    
        const meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
    
        const year = data.getUTCFullYear();
        const month = meses[data.getUTCMonth()];
    
        return `${month} ${year}`;
    };


  return (
    <div className='flex flex-col bg-slate-200 h-96'>
        <div className='flex bg-slate-400 h-36 border-b-4'>
            Capa
        </div>
        <div className='flex flex-col justify-end p-3'>
            <div className='flex flex-col pt-0'>
                <div className='flex flex-row justify-between'>
                    <div className='flex h-32 w-32 bg-slate-700 p-1 rounded mt-[-60px]'><Image src={sem_foto}></Image></div>
                    <div><Button className="bg-blue-500">Seguir</Button></div>
                </div>
                <div>
                    <div className='font-bold'>{data?.name}</div>
                    <div className='text-[14px] text-gray-600'>{data?.username}</div>
                    <div className='flex flex-row items-center gap-2 text-[14px] text-gray-600 '><CalendarDays width={18} height={18}></CalendarDays>Criada em {dateToText(data?.createdAt)}</div>
                </div>
            </div>
        </div>
        <div className=" flex flex-row items-end flex-1">
            <div className='w-full flex items-center justify-between gap-2'>
                <div className={`h-10 w-full border-b-2 font-semibold ${selecionado === 'posts' ? 'border-black' : ''} flex justify-center hover:cursor-pointer`} onClick={() => setSelecionado('posts')}>
                    Posts
                </div>
                <div className={`h-10 w-full border-b-2 font-semibold ${selecionado === 'users' ? 'border-black' : ''} flex justify-center hover:cursor-pointer`} onClick={() => setSelecionado('users')}>
                    Seguidores
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetails