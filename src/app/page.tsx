import './styles/pages/page.scss'
import { Comfortaa } from 'next/font/google'
import Sobre from  './components/Sobre'
import Experiencia from './components/Experiencias'
import Servicos from './components/Servicos'

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
      <Experiencia/>
    </>
  )
}
