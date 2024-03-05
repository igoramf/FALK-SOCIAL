'use client'
import { Outfit } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/auth-provider'
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib/react-query'


const inter = Outfit({ subsets: ['latin'] })

/*export const metadata = {
  title: 'Falk',
  description: 'Generated by create next app',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/site.webmanifest'
}*/

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className} >{children}
          <Toaster></Toaster>
          </body>
        </html>
      </AuthProvider>
    </QueryClientProvider>

  )
}
