import { Home, LayoutGrid, Rocket } from "lucide-react";

export default[
    {
        id:1,
        name:'Entrar',
        path:'/public/signIn',
        icon:Home
    },
    {
        id:2,
        name:'Cadastre-se',
        path:'/public/signUp',
        icon:Rocket
    },
    {
        id:3,
        name:'Comunidade',
        path:'/private/home',
        icon:LayoutGrid
    },
    {
        id:4,
        name:'Sobre',
        path:'/public/aboutPage',
        icon:LayoutGrid
    },
]