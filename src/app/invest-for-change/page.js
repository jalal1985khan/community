
import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import Content from './Content'
import Contact from './Contact'
import Seo from '../../../component/Seo'

const title= 'Invest for community development with Community Action Collab'
  const description = 'Drive community development, build resilience among the vulnerable and empower communities by investing in our humanitarian emergency platform. Know more.'
  const url = 'https://communityactioncollab.org/invest-for-change'
  const banner ="/images/Highcompressed_712800817.png"

function Impact() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
    <Header/>
          <Banner />
      <Content />
      <Contact/>
    <Footer/>

    </>
  )
}

export default Impact
