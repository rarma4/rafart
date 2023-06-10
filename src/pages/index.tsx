import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-4`}
        >
        <Header></Header>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          .. Rafart .... init
        </div>
      </main>
    </>
  )
}
