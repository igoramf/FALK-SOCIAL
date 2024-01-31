import { Outfit } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/auth-provider'


const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Falk',
  description: 'Generated by create next app',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className} >{children}</body>
      </html>
    </AuthProvider>

  )
}
