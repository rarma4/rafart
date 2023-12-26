import Image from 'next/image'
import '../styles/components/experiencia.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faSquareInstagram, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Formacao from './Formacao'
import Experiencias from './Experiencias'

export default function Experiencia() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="#experiencia">
        <div className="container">
          <div className="row mt-4">
            <h2 className="text-center text-warning">Experiência</h2>
            <div className="col-md-6 col-sm-6 p-3">
              <Formacao/>
            </div>
            <div className="col-md-6 col-sm-6 p-3">
              <Experiencias/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
