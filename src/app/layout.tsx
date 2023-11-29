import './styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import 'bootswatch/dist/morph/bootstrap.min.css';
// import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer';

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
    <html lang="pt-br">
      <body className={inter.className}>
      {/* <body className="d-flex flex-column min-nh-100"> */}
        <Navigation />
        {children}
        <Footer />
        <script src="../../assets/js/bootstrap.bundle.min.js" async></script>

      </body>
    </html>
  )
}
