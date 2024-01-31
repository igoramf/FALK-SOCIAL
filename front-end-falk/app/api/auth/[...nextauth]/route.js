import { login } from "@/services/loginFunctions";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: 'Email', type: 'email'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials){
                const response = await login(credentials.email, credentials.password)

                if(!response) {
                    return null
                }

                return response.data.data
            }
        
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                const obj = {
                    ...token,
                    role: 'admin',
                    userId: user.id,
                    authToken: user.token,
                    user: user.user
                  }
                  
              return obj
            }
      
            return token
          },
         session: async ({ session, token }) => {

            return {
              ...session,
              user: {
                name: token.name,
                email: token.email,
                role: token.role,
                userId: token.userId,
                user: token.user,
                authToken: token.authToken
              }
            }
          }
    },
    pages: {
        signIn: '/public/signIn'
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}