import './styles/pages/page.scss'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>
              Raf Art Developer
            </h1>
            <p>testando</p>
          </div>
        </div>
      </div>
    </>
  )
}
