import '../styles/components/experiencias.scss'
import { ExperienciaProfissional } from '../utils/Utils'

export default function Experiencias() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        {ExperienciaProfissional.map((item, index) => (

          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={item.chave} aria-expanded="false" aria-controls={item.retorno}>
                {item.nome}
              </button>
            </h2>
            <div id={item.retorno} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>{item.descricao}</strong>
                <p><code>{item.data}</code></p>
                <ul>
                  {item.detalhes.map((detalhe, index) => (
                    <li key={index}>{detalhe}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        ))}
      </div>
    </>
  )
}
