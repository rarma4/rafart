import Image from 'next/image'
import './styles/pages/page.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>teste</h1>
      </div>
      <footer className="container bg-dark text-white mt-auto">
        <div className="row">
          <div className="col p-3 text-center mt-auto">
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            <Link
              href={{
                pathname: 'https://www.facebook.com/rarma4/',
                query: { name: 'facebook' },
              }}
            >

              <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
