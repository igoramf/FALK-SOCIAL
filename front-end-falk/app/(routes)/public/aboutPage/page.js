'use client'

import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"

const AboutPage =  () => {
    const { data: session } = useSession()
    
    return (
        <div className="w-full h-full flex justify-center items-center flex-col">
            <h1>Sobre</h1>
            {session && <pre className="bg-slate-900 text-slate-50 p-10 rounded-lg">{JSON.stringify(session, null, 2)}</pre>}
        </div>
    )
}

export default AboutPage;