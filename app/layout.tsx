import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AUNA - El movimiento que impulsa la equidad de género',
  description: 'AUNA nace con el propósito de romper con la idea de la lucha solitaria desde las mujeres para avanzar hacia una sociedad con equidad de género, incorporando a los hombres, las familias y a todo el ecosistema.',
  keywords: ['auna', 'equidad de género', 'mujeres', 'transformación social', 'chile', 'empoderamiento'],
  authors: [{ name: 'AUNA' }],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
