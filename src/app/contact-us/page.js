import React from 'react'
import Header from '../../../component/Header'
import Footer from '../../../component/Footer'
import Contactform from './contact/Contactform'
import Seo from '../../../component/Seo'


const title= 'Collaborate to create impact in lives of the last mile'
  const description = 'Reach out to us to learn more about how we help build resilience amongst the vulnerable communities and help them bounce forward through collaborative action.'
  const url = 'https://communityactioncollab.org/contact-us'
  const banner ="/images/Highcompressed_712800817.png"


function page() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
    <Header/>
    <Contactform/>
    <Footer/>

    </>
  )
}

export default page
