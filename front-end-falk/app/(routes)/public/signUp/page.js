"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register  as registerUser } from "@/services/loginFunctions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@/app/_utils/zodSchemas";

function SignIn() {

  const [error, setError] = useState(null)

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema)
  })

  const router = useRouter()

  const handleSignUp = async (e) => {


    const data = {
      email: e.email,
      password: e.password,
      username: e.username,
      name: e.name,
      telefone: e.telefone
    }
    const response = await registerUser(data);

    if(response){
      router.refresh()
      router.push("/public/signIn")
    }else{
      setError("Erro ao realizar cadastro");
    }
  };

  return (
    <div className="parent flex items-center justify-center h-screen w-screen ">
      <form  onSubmit={handleSubmit((e) => handleSignUp(e))} className="w-full flex justify-center">
        <div className="child font-bold text-[29px]  w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col  border-2 border-purple-700 p-4 rounded">
          <div className="flex justify-center text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Cadastre-se
          </div>
          <Input
            upText="Username"
            {...register("username")}
            helperText={errors.username?.message}
          ></Input>
          <Input
            upText="Email"
            {...register("email")}
            helperText={errors.email?.message}
          ></Input>
          <Input
            upText="Name"
            {...register("name")}
            helperText={errors.name?.message}
          ></Input>
          <Input
            upText="Telefone"
            {...register("telefone")}
            helperText={errors.telefone?.message}
          ></Input>
          <Input
            upText="Senha"
            {...register("password")}
            helperText={errors.password?.message}
          ></Input>
          <span  className='text-sm text-red-500'>{error}</span>
          <div className='flex flex-col sm:flex-row sm:justify-end'>
              <Link className='text-sm text-gray-500' href="signIn">Fazer login!</Link>
            </div>
          <div className="w-1/2">
            <Button type="submit">Cadastrar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
