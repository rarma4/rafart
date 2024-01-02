import '../styles/components/header.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column header">
        <header className="container "id="#topo">
          <div className="row p-3 text-center ">
            <div className="col-md-2 col-sm-1"></div>
            <div className="col-md-8 col-sm-10 ">
              <h1 className="home-title pb-3"><strong>Rafael Marinho</strong></h1>
              <h2 className="home-subtitle pb-3 text-warning">Frontend Developer</h2>
              {/* <p className="pb-3">Profissional em <strong>UX Designer</strong> e <strong> desenvolvimento Front-End</strong> criando designs modernos e responsivos para <strong>Web</strong> e <strong>dispositivos Mobile</strong>. Vamos trabalhar juntos. Obrigado.
              </p> */}
              <p className="pb-3">Apaixonado por tecnologia e inovação, busco oferecer soluções práticas e eficazes que trarão ótimos resultados. Vamos trabalhar juntos. Obrigado.
              </p>
              {/* <a href="#sobre" className="btn btn-outline-warning smoothScroll tm-view-more-btn">Vamos começar</a> */}
              <Link className="btn btn-outline-warning smoothScroll tm-view-more-btn" href="/#sobre">Vamos começar</Link>
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
