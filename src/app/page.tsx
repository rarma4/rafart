import Image from 'next/image'
import './styles/pages/page.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faSquareInstagram, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-primary text-white ">


      <footer className="container  ">
        <div className="row p-3 text-center mt-auto d-flex mt-auto d-flex justify-content-evenly ">
          <div className="col-2 d-flex justify-content-center">
            <Link href="https://www.facebook.com/rarma4/" target="_blank">
              <div className="icon" title="facebook">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
            </Link>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <Link href="https://www.instagram.com/rarma4/" target="_blank">
              <div className="icon" title="instagram">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </div>
            </Link>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <Link href="https://github.com/rarma4" target="_blank">
              <div className="icon" title="github">
                <FontAwesomeIcon icon={faSquareGithub} />
              </div>
            </Link>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <Link href="https://www.linkedin.com/in/rarma4/" target="_blank">
              <div className="icon" title="linkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </Link>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <Link href="https://api.whatsapp.com/send/?phone=5511999767629&text=Contato+pelo+site+Raf%27Art%3A&type=phone_number&app_absent=0" target="_blank">
              <div className="icon" title="whatsApp">
                <FontAwesomeIcon icon={faSquareWhatsapp} />
              </div>
            </Link>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <Link href="callto:5511999767629" target="_blank">
              <div className="icon" title="Celular">
                <FontAwesomeIcon icon={faSquarePhone} />
              </div>
            </Link>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
