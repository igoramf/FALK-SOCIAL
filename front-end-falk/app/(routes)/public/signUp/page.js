"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/services/loginFunctions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [telefone, setTelefone] = useState(null);

  const [error, setError] = useState(null)

  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault()

    const data = {
      email,
      password,
      username,
      name: name,
      telefone: telefone
    }
    const response = await register(data);

    if(response){
      router.refresh()
      router.push("/public/signIn")
    }else{
      setError("Erro ao realizar cadastro");
    }
  };

  return (
    <div className="parent flex items-center justify-center h-screen w-screen ">
      <form  onSubmit={handleSignUp} className="w-full flex justify-center">
        <div className="child font-bold text-[29px]  w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col  border-2 border-purple-700 p-4 rounded">
          <div className="flex justify-center text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Cadastre-se
          </div>
          <Input
            upText="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            upText="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            upText="Name"
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            upText="Telefone"
            onChange={(e) => setTelefone(e.target.value)}
          ></Input>
          <Input
            upText="Senha"
            onChange={(e) => setPassword(e.target.value)}
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
