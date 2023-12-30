import '../styles/components/footer.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faSquareInstagram, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary text-white ">

        <footer className="container">
          <div className="row p-3 text-center mt-auto d-flex mt-auto d-flex justify-content-evenly ">
            <div className="col-xl-3 col-md-4 col-xs-1 d-flex justify-content-evenly">
              <Link href="https://www.facebook.com/rarma4/" target="_blank">
                <div className="icon" title="facebook">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </div>
              </Link>
              <Link href="https://www.instagram.com/rarma4/" target="_blank">
                <div className="icon" title="instagram">
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </div>
              </Link>
              <Link href="https://github.com/rarma4" target="_blank">
                <div className="icon" title="github">
                  <FontAwesomeIcon icon={faSquareGithub} />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/rarma4/" target="_blank">
                <div className="icon" title="linkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=5511999767629&text=Contato+pelo+site+Raf%27Art%3A&type=phone_number&app_absent=0" target="_blank">
                <div className="icon" title="whatsApp">
                  <FontAwesomeIcon icon={faSquareWhatsapp} />
                </div>
              </Link>
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
