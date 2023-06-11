import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center p-4 bg-slate-900 text-gray-100`}
        >
        <Header></Header>
        <div className="z-10 w-full max-w-6xl items-center justify-between font-sans text-lg lg:flex">
          .. Rafart .... 
        </div>
      </main>
    </>
  )
}
