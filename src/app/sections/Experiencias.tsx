import '../styles/sections/experiencias.scss'
import Formacao from '../components/Formacao'
import Experiencia from '../components/Experiencia'

export default function Experiencias() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="experiencia">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className="text-center text-warning">Experiência</h2>
            <div className="col-md-6 col-sm-6 p-3">
              <Formacao/>
            </div>
            <div className="col-md-6 col-sm-6 p-3">
              <Experiencia/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
