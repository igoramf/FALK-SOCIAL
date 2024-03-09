import Image from "next/image";
import semFoto from "../../public/sem-foto.jpg"
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "./button";

const LoginDropdown = () => {

    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => setIsActive(false);

    // IA FAZER UM DROPDOWN MENU MAS ACHEI QUE NAO FAZ MT SENTIDO

    const { user: user } = useSession().data || {};
    const profileImg = user?.profile_pic ? user.profile_pic : semFoto.src

    return (
        <div>
            {user ?
                <div onClick={handleIsActive} className="flex items-center justify-center bg-slate-400 h-12 w-12 rounded-lg hover:cursor-pointer">
                    <img className="rounded-full" width={30} height={20} src={profileImg} alt="perfilImg"></img>
                </div>
                :
                <Button className="mt-3 bg-blue-500">Get Started</Button>
                /*
                <div className="flex items-end flex-col h-12">
                    <div onClick={handleIsActive} className="flex items-center justify-center bg-blue-600 h-12 w-12 rounded-lg hover:cursor-pointer absolute z-10">
                        <Image onClick={handleIsActive} width={30} height={20} src={semFoto.src}></Image>
                    </div>
                    <div className="w-64 h-64 bg-blue-800 absolute rounded-lg mt-14 text-white">
                        sdada
                    </div>
                </div>*/
            }
        </div>
    )
}

export { LoginDropdown };
/*{!session &&  <Button className="mt-3 bg-blue-500">Get Started</Button>}*/