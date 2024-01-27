
import React from 'react'
import Header from '../../../component/Header'
import Banner from './ActionComponent/Banner'
import Bodyaction from './ActionComponent/Bodyaction'
import Footer from '../../../component/Footer'
import Seo from '../../../component/Seo'


const title= 'Designs & delivers high-impact services to marginalised communities'
  const description = 'We orchestrate high-impact initiatives and influence partnerships to solve problems faced by marginalised communities to facilitate transformative impact. Learn more.'
  const url = 'https://communityactioncollab.org/our-action'
  const banner ="/images/Highcompressed_712800817.png"


function Action() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
    <Header/>
    <Banner/>
    <Bodyaction/>
    <Footer/>

    </>
  )
}

export default Action
