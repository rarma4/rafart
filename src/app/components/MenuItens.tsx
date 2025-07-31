'use client'
import Link from "next/link"
import React, { useState } from 'react';

type MenuProps = {
  mobile?: any;
}

export default function MenuItens(props: MenuProps) {
  const [btnActive, setBtnActive] = useState("home")

  return (
    <>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <a className={`nav-link ${btnActive === "home" && "active"}`} href="#" onClick={()=>setBtnActive("home")}>Home
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
      <li className="nav-item"  data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "conhecimentos" && "active"}`} onClick={()=>setBtnActive("conhecimentos")} href="/#conhecimentos">Conhecimentos</Link>
      </li>
      <li className="nav-item"  data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "sobre" && "active"}`} onClick={()=>setBtnActive("sobre")} href="/#sobre">Sobre</Link>
      </li>
      <li className="nav-item"  data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "experiencia" && "active"}`} onClick={()=>setBtnActive("experiencia")} href="/#experiencia">Experiência</Link>
      </li>
    </>
  )
}
