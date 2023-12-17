import './styles/pages/page.scss'
import { Comfortaa } from 'next/font/google'
import Sobre from  './components/Sobre'

const comfortaa = Comfortaa({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Sobre/>
    </>
  )
}
