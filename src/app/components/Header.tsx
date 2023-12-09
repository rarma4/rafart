import Image from 'next/image'
import '../styles/components/header.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faSquareInstagram, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column header">
        <header className="container ">
          <div className="row p-3 text-center ">
            <div className="col-md-2 col-sm-1"></div>
            <div className="col-md-8 col-sm-10 ">
              <h1 className="home-title pb-3"><strong>Rafael Marinho</strong></h1>
              <h2 className="home-subtitle pb-3 text-warning">Frontend Developer</h2>
              <p className="pb-3">Profissional em <strong>UX Designer</strong> e <strong> desenvolvimento Front-End</strong> criando designs modernos e responsivos para <strong>Web</strong> e <strong>dispositivos Mobile</strong>. Vamos trabalhar juntos. Obrigado.</p>
              <a href="#work" className="btn btn-outline-warning smoothScroll tm-view-more-btn">Vamos começar</a>
            </div>
            <div className="col-md-2 col-sm-1"></div>
            {/* <div className="col-xl-3 col-md-4 col-xs-1 d-flex justify-content-evenly">
              
            </div> */}
          </div>
        </header>
      </div>
    </>
  )
}
