import Image from 'next/image'
import '../styles/components/sobre.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faSquareInstagram, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Sobre() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column " id="#sobre">
        <div className="container">
          <div className="row p-3">
            <h2 className="text-center">Sobre mim</h2>
            <div className="col-md-6 col-sm-6 p-3">
              <h3>Quem sou eu?</h3>
              <p>Bacharel em Sistemas de Informação, conhecimentos em PHP, Javascript, Python, HTML, CSS, Bootstrap, WordPress, SQL, React. </p>
              <p>Conhecimento em Web Design, Designer Gráfico, com especialidade em desenvolvimento de sites institucionais, blogs, portais corporativos, lojas virtuais, landing pages e catálogos online para empresas e/ou profissionais liberais.</p>
              <p> Criação de identidades visuais para empresas, logomarcas, cartões de visita, banners e peças gráficas para campanhas publicitárias</p>
              <a href="#work" className="btn btn-outline-warning smoothScroll tm-view-more-btn">Download CV</a>

            </div>
            <div className="col-md-6 col-sm-6 p-3">
            <h3 className="text-center">Minhas Habilidades</h3>
              
              <div className="pl-3 d-flex justify-content-between flex-row">
                <p>Wordpress</p><p>75%</p>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }}></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
