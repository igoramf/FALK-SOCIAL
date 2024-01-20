"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const handleSignUp = () => {
    console.log("fazendo requisicao");
  };

  return (
    <div className="parent flex items-center justify-center h-screen w-screen ">
      <div className="child font-bold text-[29px] h-1/4 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col">
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
          upText="Senha"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <div className="w-1/2">
          <Button onClick={handleLogin}>Cadastrar</Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
