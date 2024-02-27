"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const schema = z.object({
    email: z
    .string()
    .min(1, { message: "Esse campo deve ser preenchido." })
    .email("Não é um email válido"),
    password: z.string().min(4, { message: "Esse campo deve ser preenchido." })
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema)
  })

  console.log(errors)

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await signIn('credentials', {
        redirect: false,
        email,
        password,
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
      <form onSubmit={handleSubmit((data) => console.log(data) )}  className='flex justify-center w-full'>
        <div className='child font-bold text-[29px]  w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex  flex-col gap-4 border-2 border-purple-700 p-4 rounded'>
          <div className='flex justify-center text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Faça o login</div>
          <Input upText="Email" onChange={(e) => setEmail(e.target.value)} {...register("email")} helperText={errors.email?.message}></Input>
          <Input upText="Senha" type="password" onChange={(e) => setPassword(e.target.value)}  {...register("password")} helperText={errors.password?.message}></Input>
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