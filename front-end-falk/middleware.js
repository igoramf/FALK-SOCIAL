import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const middleware = ( request ) => {
    console.log('[MIDDLEWARE_NEXTAUTH_TOKEN]: ', request.nextauth.token)

    const isPrivateRoutes = request.nextUrl.pathname.startsWith('/private')
    const isAdminUser = request.nextauth.token?.role == 'admin'

    if(isPrivateRoutes && !isAdminUser){
        return NextResponse.rewrite(new URL('/denied', request.url))
    }
}

const callbackOptions = () => {}

export default withAuth(middleware, callbackOptions);

export const config = {
    matcher: "/private/:path*"
}