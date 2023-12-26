import Image from 'next/image'
import '../styles/components/formacao.scss'
import { FormacaoAcademica } from '../utils/Utils'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faSquareInstagram, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
