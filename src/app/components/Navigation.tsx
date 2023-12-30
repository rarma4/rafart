import Image from 'next/image'
import '../styles/components/navigation.scss'
import Link from "next/link"

export default function Navigation() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <Image
                src="../../assets/img/rafart-logo.svg"
                alt="logo rafart"
                width={30}
                height={24}
              />
            </a>
            <a className="navbar-brand logo-header" href="#">Raf &apos;Art</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav ms-md-auto">
                <li className="nav-item">
                  {/* <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                  </a> */}
                  <Link className="nav-link active" href="/#topo">Home
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#sobre">Sobre</a> */}
                  <Link className="nav-link" href="/#sobre">Sobre</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#experiencia">Experiência</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
  
              </ul>
  
            </div>
          </div>
        </nav>
      </>
    )
  }
  