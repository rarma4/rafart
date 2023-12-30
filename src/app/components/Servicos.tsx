import '../styles/components/servicos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay  } from '@fortawesome/free-solid-svg-icons' 

export default function Servicos() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="#servicos">
        <div className="container">
          <div className="row mt-4">
            <h2 className="text-center text-warning">Serviços</h2>
            <div className="col-md-4 col-sm-6 p-3 text-center">
              dsds
              zq
              zqa
            </div>
            <div className="col-md-4 col-sm-6 p-3 text-center">

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Websites</h4>
                  <div className="iconService w-100" title="facebook">
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text">Quer aumentar sua visibilidade na internet?  Criamos sites modernos e responsivos (se adaptam ao tamanho da tela do usuário).</p>
                  {/* <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a> */}
                </div>
              </div>

            </div>
            <div className="col-md-4 col-sm-6 p-3 text-center">
              sdsd
              sasa
              asasdf
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
