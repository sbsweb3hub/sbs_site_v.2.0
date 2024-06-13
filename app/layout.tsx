import '../styles/global.scss'
import type { Metadata } from 'next'
import { Providers } from '@/auth/wagmi/providers'
import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Chakra_Petch } from "next/font/google";
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';



const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: 'AngelForge',
  description: 'Web3 platform for safe launches'
}



export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode,
}>) {
  return (
    <html className='dark' lang="en">
      <body style={{fontFamily: 'Chakra Petch'}}>
        <div className="flex flex-col min-h-screen">

          <Providers>
            <NextUIProvider>

              <main className='text-foreground'>
                {children}
              </main>
              <Footer />

            </NextUIProvider>

          </Providers>
        </div>
        <Analytics/>
      </body>
    </html>
  )
}
