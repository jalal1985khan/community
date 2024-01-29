import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link href="/"><Image src='/images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#impact">The Collaborative Impact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#opportunities">Investment Opportunities</a>
        </li>
      </ul>
      
        <Link className="btn-invest" href="#invest">Invest in change</Link>
      
    </div>
  </div>
          </nav>
          <hr/>
    </div>
  )
}

export default Header
