import '../styles/sections/footer.scss'
import Link from 'next/link'

import { FaSquareGithub, FaLinkedin, FaSquareWhatsapp, FaSquarePhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary text-white ">

        <footer className="container">
          <div className="row p-3 text-center mt-auto d-flex justify-content-evenly ">
            <div className="col-xl-3 col-md-4 col-xs-1 d-flex justify-content-evenly">
              <Link href="https://github.com/rarma4" target="_blank" rel="noopener noreferrer">
                <div className="icon" title="github">
                  <FaSquareGithub />
                  
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/rarma4/" target="_blank" rel="noopener noreferrer">
                <div className="icon" title="linkedIn">
                  <FaLinkedin />
                </div>
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=5511999767629&text=Contato+pelo+site+Raf%27Art%3A&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <div className="icon" title="whatsApp">
                  <FaSquareWhatsapp />
                </div>
              </Link>
              <Link href="tel:5511999767629">
                <div className="icon" title="Celular">
                  <FaSquarePhone />
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
