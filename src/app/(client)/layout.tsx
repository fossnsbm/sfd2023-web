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
  title: 'FOSS Community of NSBM',
  description: 'Free & Open Source Software Community of NSBM Green University Town',
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
