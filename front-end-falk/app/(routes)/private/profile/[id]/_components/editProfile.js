import React, { useState } from "react";
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
import { Camera } from "lucide-react";
import { uploadProfilePic } from "@/services/userFunctions";




function EditProfile({ trigger, userId, profileImg }) {
  
  const [image, setImage] = useState(profileImg ?? null)

  const handleImage = async (file) => {
    if(file){
      const url = URL.createObjectURL(file)
      setImage(url)
      await uploadProfilePic(file, userId)
    }

  }

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
                  <div className="h-24 bg-slate-400 rounded-full w-24 flex justify-center items-center">
                    <label className="block absolute top-20 left-15" htmlFor="picture_input">
                        <Camera className="hover:cursor-pointer z-30"></Camera>
                        <input type="file" accept="image/*" id="picture_input" className="hidden" multiple={false} onChange={(e) => handleImage(e.target.files[0])}/>
                    </label>
                    {image ? <img src={image} alt="Foto de perfil" className="h-auto w-full rounded-full" /> : null}    
                  </div>
                  <div className="flex justify-center">
                    <DialogClose asChild>
                      <Button
                        className="w-1/3 flex justify-center"
                        disabled={!Boolean(image)}
                      >
                        Salvar
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
