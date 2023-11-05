import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Hook Form - Playground',
  description: 'Playground for React Hook Form Powered By Next.js',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
