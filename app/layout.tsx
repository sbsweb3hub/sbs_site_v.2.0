
import './globals.css'
import type { Metadata } from 'next'
// import { headers } from 'next/headers'
// import { cookieToInitialState } from 'wagmi'
// import { config } from '@/auth/wagmi/config/config'
import { Providers } from '@/auth/wagmi/providers'
import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Chakra_Petch } from "next/font/google";
import Footer from './components/Footer'



const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: 'Step-Blast-Step',
  description: 'Web3 platform for safe launches'
}



export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode,
}>) {
  // const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html className='dark' lang="en">
      <body className={chakraPetch.className}>
        <div className="flex flex-col min-h-screen">

          <Providers
          // initialState={initialState}
          >
            <NextUIProvider>

              <main className='text-foreground'>
                {children}
              </main>

            </NextUIProvider>

          </Providers>
        </div>
      </body>
    </html>
  )
}
