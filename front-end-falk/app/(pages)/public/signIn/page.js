"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useState } from 'react'

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    console.log('fazendo requisicao')
  }

  return (
    <div className='parent flex items-center justify-center h-full w-full '>
      <div className='child font-bold text-[29px]  w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex  flex-col gap-4 border-2 border-purple-700 p-4 rounded'>
        <div className='flex justify-center text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Faça o login</div>
        <Input upText="Email" onChange={(e) => setEmail(e.target.value)}></Input>
        <Input upText="Senha" onChange={(e) => setPassword(e.target.value)} ></Input>
        <div className='flex flex-col sm:flex-row sm:justify-between'>
          <Link className='text-sm text-gray-500' href="forgetPassword">Esqueceu sua senha?</Link>
          <Link className='text-sm text-gray-500' href="signUp">Cadastre-se!</Link>
        </div>
        <div className='w-1/2'>
          <Button onClick={handleLogin}>Fazer Login</Button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;