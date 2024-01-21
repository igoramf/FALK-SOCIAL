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
                const isValidEmail = user?.email == credentials?.email
                const isValidPassword = user?.password == credentials?.password


                if(isValidEmail && isValidPassword) {
                    return null
                }

                return user
                
            }
        
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}