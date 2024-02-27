import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keep Coding',
  description: 'Let us solve some coding challenges',
  keywords : "coding challenges",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head>
            <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_SECRETE}`}
             crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  )
}
