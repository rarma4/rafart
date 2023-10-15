import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootswatch/dist/morph/bootstrap.min.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rafart',
  description: 'Pagina de Rafael Marinho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <script src="../../assets/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
