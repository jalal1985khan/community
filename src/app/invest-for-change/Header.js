import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link href="/"><Image src='/images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo' /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#impact">The Collaborative Impact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#opportunities">Investment Opportunities</a>
        </li>
      </ul>
      
        <Link class="btn-invest" href="#invest">Invest in change</Link>
      
    </div>
  </div>
          </nav>
          <hr/>
    </div>
  )
}

export default Header
