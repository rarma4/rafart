import './styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import 'bootswatch/dist/morph/bootstrap.min.css';
// import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css'
import Navigation from './components/Navigation'
import Footer from './sections/Footer'
import { Comfortaa } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
 
const comfortaa = Comfortaa({
  weight: '700',
  variable: '--font-comfortaa',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `Raf'Art – Developer and WebDesign`,
  description: 'Pagina de Rafael Marinho desenvolvedor senior frontend',
  metadataBase: new URL('https://www.rafart.com.br/'),
  alternates: {
    canonical: '/',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={comfortaa.className}>
      {/* <body className="d-flex flex-column min-nh-100"> */}
        <Navigation />
        {children}
        <Footer />
        <script src="../../assets/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
