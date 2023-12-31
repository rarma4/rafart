import '../styles/components/servico.scss'
import { ServicoS } from '../utils/Utils'
import Image from 'next/image'

export default function Servicos() {
  return (
    <>
      {ServicoS.map((item, index) => (
        <div className="col-md-4 col-sm-6 p-3 text-center" key={index}>

          <div className="card">
            <div className="card-body">
              <div className="iconService w-100" title="">
              <Image
                src={item.src}
                alt="logo rafart"
                width={item.altura}
                height={item.largura}
              />
              </div>
              <h4 className="card-title">{item.titulo}</h4>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">{item.texto}</p>
              {/* <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a> */}
            </div>
          </div>

        </div>
      ))}
    </>
  )
}
