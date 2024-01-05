'use client'
import Image from 'next/image'
import '../styles/components/offnavigation.scss'
import Link from "next/link"


export default function OffNavigation() {
  return (
    <>

      <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div className="offcanvas-body">

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" >
              <Link className="nav-link" href="/#conhecimentos">Conhecimentos</Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" >
              <Link className="nav-link" href="/#sobre">Sobre</Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" >
              <Link className="nav-link" href="/#experiencia">Experiência</Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}