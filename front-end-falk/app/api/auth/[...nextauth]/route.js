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
                const user = {
                    id: 1,
                    email: 'igor@gmail.com',
                    password: '123',
                    name: 'igorAuth',
                    role: 'admin'
                }
                const isValidEmail = user.email === credentials.email
                const isValidPassword = user.password === credentials.password


                if(!isValidEmail || !isValidPassword) {
                    return null
                }

                return user
            }
        
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            const customUser = user

            if (user) {
                const obj = {
                    ...token,
                    role: customUser.role,
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
                role: token.role
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