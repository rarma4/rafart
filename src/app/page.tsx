import './styles/pages/page.scss'
import { Comfortaa } from 'next/font/google'
import Sobre from  './sections/Sobre'
import Experiencias from './sections/Experiencias'
import Servicos from './sections/Servicos'

const comfortaa = Comfortaa({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Servicos/>
      <Sobre/>
      <Experiencias/>
    </>
  )
}
