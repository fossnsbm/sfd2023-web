import ClientOnly from '@/components/ClientOnly';
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true
});

export const metadata: Metadata = {
  title: 'SFD 2023',
  description: 'Software Freedom Day 2023 Sri Lanka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  )
}
