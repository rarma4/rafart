import Image from 'next/image'
import '../styles/components/navigation.scss'
import Link from "next/link"
import OffNavigation from '../components/OffNavigation'
import MenuItens from '../components/MenuItens'

export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image
              src="../../assets/img/rafart-logo.svg"
              alt="logo rafart"
              width={30}
              height={24}
            />
          </a>
          <a className="navbar-brand logo-header" href="/">Raf &apos;Art</a>

          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-md-auto">
              <MenuItens />
            </ul>
          </div>
        </div>
      </nav>
      <OffNavigation />
    </>
  )
}
