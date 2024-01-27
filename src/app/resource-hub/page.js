import Header from '../../../component/Header';
import React from 'react';
import Footer from '../../../component/Footer'
import Banner from './Resource/Banner';
import Knowledgebase from './Resource/Knowledgebase';
import Seo from '../../../component/Seo'


const title= 'Knowledgebase - Community Collab Action'
  const description = 'Resource Hub Knowledge Base Climate Advisory 2023 | Heat wave KNOW MORE Climate Advisory 2023 | Cold wave KNOW MORE Climate Advisory 2023 | Monsoon KNOW MORE Research Paper | Drivers of vaccine hesitancy among vulnerable populations in India: a cross-sectional multi-state study KNOW MORE Media An initiative to build economic resilience among Odisha’s liguistic'
  const url = 'https://communityactioncollab.org/resource-hub/'
  const banner ="/images/Highcompressed_712800817.png"


function page() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
      <Header/>
      <Banner/>
      <Knowledgebase/>
      <Footer/>
    </>
  )
}

export default page
