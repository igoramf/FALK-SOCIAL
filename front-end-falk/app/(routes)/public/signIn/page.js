"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../../../_utils/zodSchemas"

function SignIn() {
  const [error, setError] = useState(null);


  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  })

  const router = useRouter();

  const handleLogin = async (e) => {

    try {
      const response = await signIn('credentials', {
        redirect: false,
        email: e.email,
        password: e.password
      })

      console.log('[LOGIN_RESPONSE]: ', response)

      if (!response?.error) {
        router.refresh()
        router.push('/private/home')
      } else {
        setError('Email ou senha inválidos')
      }
    } catch (error) {
      console.log('[LOGIN_ERROR]: ', error)
    }
  }
  return (
    <div className='parent flex items-center justify-center h-full w-full '>
      <form onSubmit={handleSubmit((e) => handleLogin(e) )}  className='flex justify-center w-full'>
        <div className='child font-bold text-[29px]  w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex  flex-col gap-4 border-2 border-purple-700 p-4 rounded'>
          <div className='flex justify-center text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Faça o login</div>
          <Input upText="Email" {...register("email")} helperText={errors.email?.message}></Input>
          <Input upText="Senha" type="password"  {...register("password")} helperText={errors.password?.message}></Input>
          <span className='text-sm text-red-500'>{error}</span>
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <Link className='text-sm text-gray-500' href="forgetPassword">Esqueceu sua senha?</Link>
            <Link className='text-sm text-gray-500' href="signUp">Cadastre-se!</Link>
          </div>
          <div className='w-1/2'>
            <Button type="submit">Fazer Login</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn;