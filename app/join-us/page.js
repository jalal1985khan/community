
import React from 'react'
import Header from '@/component/Header'
import Banner from './Join/Banner'
import Footer from '@/component/Footer'
import JoinUs from './Join/join-us'
import Seo from '../../component/Seo'


const title= 'Empowering communities to build resilience &amp; bounce forward'
  const description = 'Partner with us if you are passionate about empowering communities and facilitating community development to help them build resilience. Find out more.'
  const url = 'https://communityactioncollab.org/join-us/'
  const banner ="/images/Highcompressed_712800817.png"

function Join() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
    <Header/>
      <Banner />
      <JoinUs/>
    <Footer/>

    </>
  )
}

export default Join
