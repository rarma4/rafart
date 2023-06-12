import Link from 'next/link'
import React, { useState } from 'react'

export default function Menu(){

    const [menuIsVisible, setMenuIsVisible] = useState(false)
    function handleChange() {
      setMenuIsVisible(!menuIsVisible)
    }

    return(
        <nav className='flex flex-row h-28 w-full justify-around items-center'>
            <Link href="/">
              <img src="img/rafart-logo-full.png" />
            </Link>
            <ul className={`menu ${menuIsVisible ? "active" :  "" }flex flex-row`} id="myLinks">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="menu-btn">
            <i className={`fas ${menuIsVisible ? "fa-times" : "fa-bars"}`} onClick={handleChange}></i>
          </div>
        </nav>
    )
}