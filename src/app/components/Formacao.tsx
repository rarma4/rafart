import '../styles/components/formacao.scss'
import { FormacaoAcademica } from '../utils/Utils'

// import {  } from '@fortawesome/free-regular-svg-icons'

export default function Formacao() {
  return (
    <>
      {FormacaoAcademica.map((item, index) => (
        <div className="card border-dark mb-3" key={index}>
          <div className="card-header">{item.data}</div>
          <div className="card-body">
            <h4 className="card-title">{item.nome}</h4>
            <p className="card-text">{item.descricao}</p>
          </div>
        </div>
      ))}
    </>
  )
}
