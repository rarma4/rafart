import '../styles/sections/sobre.scss'
import { habilidadeS } from '../utils/Utils'
import Link from "next/link"

export default function Sobre() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column " id="sobre">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className="text-center text-warning">Sobre mim</h2>
            <div className="col-md-6 col-sm-6 p-3">
              <h3 className="mb-4">Quem sou eu?</h3>
              <p>Sou Bacharel em Sistemas de Informação e atuo como Desenvolvedor Frontend com sólida experiência em tecnologias como React.js, Next.js, TypeScript, Node.js, PHP, WordPress, além de conhecimentos em bancos de dados MySQL e PostgreSQL. Também tenho experiência com estilização utilizando Tailwind, Styled Components, SCSS e Bootstrap.</p>
              <p>Ao longo da minha trajetória, participei do desenvolvimento de soluções web como sites institucionais, e-commerces, landing pages e sistemas personalizados, tanto em projetos próprios quanto em equipes multidisciplinares. Além disso, tenho vivência com consumo e construção de APIs RESTful e integração com serviços como Amazon S3.</p>
              <p> Tenho também background em design gráfico e web design, o que me permite atuar com foco não apenas na performance e funcionalidade, mas também na experiência visual e usabilidade</p>
              <p> Estou sempre em busca de novos desafios e acredito que minha experiência pode contribuir diretamente para os objetivos da empresa, unindo tecnologia, criatividade e foco em resultados.</p>
              <Link className="btn btn-outline-warning smoothScroll tm-view-more-btn" href="../../assets/docs/Rafael_Curriculum_ti.pdf" target="_blank">Download CV</Link>

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
