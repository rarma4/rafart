import '../styles/components/sobre.scss'
import { habilidadeS } from '../utils/Utils'

export default function Sobre() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column " id="#sobre">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className="text-center text-warning">Sobre mim</h2>
            <div className="col-md-6 col-sm-6 p-3">
              <h3 className="mb-4">Quem sou eu?</h3>
              <p>Bacharel em Sistemas de Informação, conhecimentos em PHP, Javascript, Python, HTML, CSS, Bootstrap, WordPress, SQL, React. </p>
              <p>Conhecimento em Web Design, Designer Gráfico, com especialidade em desenvolvimento de sites institucionais, blogs, portais corporativos, lojas virtuais, landing pages e catálogos online para empresas e/ou profissionais liberais.</p>
              <p> Criação de identidades visuais para empresas, logomarcas, cartões de visita, banners e peças gráficas para campanhas publicitárias</p>
              <a href="#work" className="btn btn-outline-warning smoothScroll tm-view-more-btn">Download CV</a>

            </div>
            <div className="col-md-6 col-sm-6 p-3">
              <h3 className="text-center mb-4">Minhas Habilidades</h3>
              {habilidadeS.map((item, index) => (
                <div className="progress mb-4" key={index}>
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning d-flex justify-content-around flex-row" role="progressbar" style={{ width: item.nivel }}>
                    <p>{item.titulo}</p><p>{item.nivel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
