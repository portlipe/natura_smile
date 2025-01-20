/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const red_hat = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Natural Smile',
  description:
    'Clínica odontológica de excelência com laboratório próprio, especializada em laminados cerâmicos (lentes de contato dental). Garantimos tratamentos de alta precisão, sorrisos naturais e personalizados, devolvendo autoestima e bem-estar com o que há de mais avançado na odontologia estética e funcional.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${red_hat.className} antialiased`}>{children}</body>
    </html>
  )
}