import { Home, LayoutGrid, Rocket, Settings, User } from "lucide-react";

export default[
    {
        id:1,
        name:'Home',
        path:'/private/home',
        icon:Home
    },
    {
        id:2,
        name:'Comunidades',
        path:'/private/communities',
        icon:Rocket
    },
    /*{
        id:3,
        name:'Tools',
        path:'/tool',
        icon:LayoutGrid
    },*/
    {
        id:4,
        name:'Perfil',
        path:'/public/aboutPage',
        icon: User
    },
    {
        id:5,
        name:'Configurações',
        path:'/private/settings',
        icon:Settings
    },
]