import React, { useState } from 'react'

function ContentType() {
    const [selecionado, setSelecionado] = useState('posts');


    return (
        <div className='w-full flex items-center justify-between gap-2'>
            <div className={`h-10 w-full border-b-2 font-semibold ${selecionado === 'posts' ? 'border-black' : ''} flex justify-center hover:cursor-pointer`} onClick={() => setSelecionado('posts')}>
                Posts
            </div>
            <div className={`h-10 w-full border-b-2 font-semibold ${selecionado === 'users' ? 'border-black' : ''} flex justify-center hover:cursor-pointer`} onClick={() => setSelecionado('users')}>
                Users
            </div>
        </div>
    );
}

export default ContentType