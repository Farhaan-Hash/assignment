"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {RecoilRoot} from "recoil";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className='bg-gray-800 h-14 text-center'>MAIN NAVBAR</nav>
      <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {children}
        </RecoilRoot>
        </QueryClientProvider>
        {/* <footer className='bg-gray-800 mt-8 h-14'>
          </footer> */}
          </body>
    </html>
  )
}
