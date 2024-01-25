
import React from 'react'
import Header from '@/component/Header'
import Banner from './ActionComponent/Banner'
import Bodyaction from './ActionComponent/Bodyaction'
import Footer from '@/component/Footer'

export const metadata = {
  title: 'Designs & delivers high-impact services to marginalised communities',
  description: 'We orchestrate high-impact initiatives and influence partnerships to solve problems faced by marginalised communities to facilitate transformative impact. Learn more.',
}

function Action() {
  return (
    <>
    <Header/>
    <Banner/>
    <Bodyaction/>
    <Footer/>

    </>
  )
}

export default Action
