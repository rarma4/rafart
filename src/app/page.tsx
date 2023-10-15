import Image from 'next/image'
import styles from './page.module.scss'


export default function Home() {
  return (
    <>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">

              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <Image
                    src="../../assets/img/rafart-logo.svg"
                    alt="logo rafart"
                    width={30}
                    height={24} 
                  />
                </a>
                <a className="navbar-brand" href="#">Raf'Art</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav ms-md-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Home
                        <span className="visually-hidden">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    
                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
