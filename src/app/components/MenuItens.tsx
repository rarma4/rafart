import Link from "next/link"

type MenuProps = {
  mobile?: any;
}

export default function ManuItens(props: MenuProps) {
  return (
    <>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <a className="nav-link active" href="#">Home
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
      <li className="nav-item"  data-bs-dismiss={`${props.mobile}`}>
        <Link className="nav-link" href="/#conhecimentos">Conhecimentos</Link>
      </li>
      <li className="nav-item"  data-bs-dismiss={`${props.mobile}`}>
        <Link className="nav-link" href="/#sobre">Sobre</Link>
      </li>
      <li className="nav-item"  data-bs-dismiss={`${props.mobile}`}>
        <Link className="nav-link" href="/#experiencia">Experiência</Link>
      </li>
    </>
  )
}
