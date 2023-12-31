import '../styles/components/servicos.scss'
import Servico from './Servico'

export default function Servicos() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="#servicos">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className="text-center text-warning">Serviços</h2>
            <Servico/>
          </div>
        </div>
      </div>
    </>
  )
}
