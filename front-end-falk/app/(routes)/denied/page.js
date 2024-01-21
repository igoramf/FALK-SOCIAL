import Link from 'next/link'

const DeniedPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="bg-slate-900 text-slate-50 p-10 rounded-lg flex flex-col  items-center justify-center gap-2">
                <h1>Acesso Restrito</h1>
                <p>Você não tem permissão para prosseguir.</p>
                <Link href="/public/signIn" className="p-4 bg-amber-950 text-color-white flex justify center">VOLTAR</Link>
            </div>
        </div>
    )
}

export default DeniedPage;