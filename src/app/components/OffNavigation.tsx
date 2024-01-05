'use client'
import Image from 'next/image'
import '../styles/components/offnavigation.scss'
import Link from "next/link"
import MenuItens from '../components/MenuItens'

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
            <MenuItens mobile = "offcanvas"/>
          </ul>

        </div>
      </div>
    </>
  )
}