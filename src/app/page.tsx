import './styles/pages/page.scss'
import { Comfortaa } from 'next/font/google'
import Header from './sections/Header'
import Sobre from  './sections/Sobre'
import Experiencias from './sections/Experiencias'
import Servicos from './sections/Servicos'
import Teste from './sections/Teste'

const comfortaa = Comfortaa({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Header/>
      <Servicos/>
      <Sobre/>
      <Experiencias/>
      <Teste/>
    </>
  )
}
