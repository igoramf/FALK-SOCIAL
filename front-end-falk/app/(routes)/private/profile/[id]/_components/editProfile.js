import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { DialogClose } from '@radix-ui/react-dialog'
import { Input } from "@/components/ui/input";




function EditProfile({ trigger }) {



    const handleSubmit = () => ""

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="mt-3 bg-blue-500">{trigger}</Button>
        </DialogTrigger>
        <DialogContent className="bg-slate-100">
          <DialogHeader>
            <DialogTitle>Edite o seu perfil</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-end">
                  <div className="flex items-center justify-start gap-2 text-black font-bold">
                    <h2 className="text-[18px]">Nome</h2>
                    <div>
                      <Input
                        variant="comments"
                        className="h-1/2 border ml-[34px]"
                        //{...register("name")}
                        //helperText={errors.name?.message}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center justify-start text-black font-bold">
                    <h2 className="text-[18px]">Descricão</h2>
                    <div>
                      <Input
                        variant="comments"
                        className="h-1/2 border"
                        //{...register("description")}
                        //helperText={errors.description?.message}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <DialogClose asChild>
                      <Button
                        className="w-1/3 flex justify-center"
                        //onClick={handleCreate}
                        //disabled={Object.keys(errors).length !== 0}
                      >
                        Criar comunidade
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}



export default EditProfile;
