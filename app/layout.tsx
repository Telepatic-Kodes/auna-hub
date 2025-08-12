import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auna Hub - Modern Web Application',
  description: 'A beautiful and modern web application built with Next.js, React, and Tailwind CSS',
  keywords: ['auna', 'hub', 'web', 'application', 'nextjs', 'react'],
  authors: [{ name: 'Telepatic-Kodes' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
