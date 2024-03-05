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
                    email: user.email,
                    name: user.name,
                    phone: user.phone,
                    username: user.user
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
                user: token.username,
                authToken: token.authToken,
                phone: token.phone
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