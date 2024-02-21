import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { useSession } from 'next-auth/react'
import { createCommunity } from '@/services/communityFunctions'
import { DialogClose } from '@radix-ui/react-dialog'
import { useToast } from '@/components/ui/use-toast'

function Banner( { updateCommList } ) {

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)

  const { user: user } = useSession().data || {};

  const { toast }  = useToast();

  const handleCreate = async () => {
    const data = {
      communityName: name,
      description: description,
      createdBy: user.userId
    }

    const response = await createCommunity(user.authToken, data)

    updateCommList()
    if(response.status == 201){
      toast({
          title: "Boaaa!",
          description: "Comunidade criada com sucesso",
          variant: "success",

      })
    }else{
        toast({
            title: "Erro :/",
            description: "Erro ao criar comunidade",
            variant: "destructive" 
        })
    }

  }

  return (
    <div className='p-2 bg-white-400 
    rounded-xl shadow-sm flex items-center
    bg-blue-100
     border gap-5'>
        <div>
          <Image className='hidden md:block' src='/social-panda-1.png' width={200} height={200} alt='panda'/>
        </div>
        <div>
          <h2 className='font-bold text-[29px] '>Espaço das comunidades</h2>
          <h2 className=''>Crie a sua comunidade para compartilhar coisas lá!!</h2>
          <Dialog>
          <DialogTrigger><Button className="mt-3 bg-blue-500">Criar Comunidade</Button></DialogTrigger>
          <DialogContent className="bg-slate-100">
            <DialogHeader>
              <DialogTitle>Crie sua comunidade</DialogTitle>
              <DialogDescription>
                <div className='flex flex-col justify-end'>
                  <div className='flex items-center justify-start gap-2 text-black font-bold'>
                    <h2 className='text-[18px]'>Nome</h2>
                    <div>
                      <Input variant="comments" onChange={(e) => setName(e.target.value)} className="h-1/2 border ml-[34px]" />
                      </div>
                  </div>
                  <div className='flex gap-2 items-center justify-start text-black font-bold'>
                    <h2 className='text-[18px]'>Descricão</h2>
                    <div>
                      <Input variant="comments" className="h-1/2 border" onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <DialogClose asChild>
                      <Button className="w-1/3 flex justify-center" onClick={handleCreate}>Criar comunidade</Button> 
                    </DialogClose>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </div>
    </div>
  )
}

export default Banner