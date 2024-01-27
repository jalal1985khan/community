import React from 'react';
import Header from '../../../component/Header'
import Banner from './EconomicResilience/Banner';
import Economic from './EconomicResilience/Economic';
import Footer from '../../../component/Footer';
import FrameworkAccordion from './EconomicResilience/FrameworkAccordion';
import PartnersAnchoring from './EconomicResilience/PartnersAnchoring';
import Seo from '../../../component/Seo'


const title= 'Empowering communities through economic resilience'
  const description = 'The Economic Resilience Impact Canvas builds the resilience of vulnerable populations by enabling them to withstand any humanitarian crisis'
  const url = 'https://communityactioncollab.org/economic-resilience/'
  const banner ="/images/Highcompressed_712800817.png"



export const metadata = {
    title: 'Supporting last mile to overcome humanitarian crises',
    description: 'The impact that we have facilitated through our partnerships provided relief and helped vulnerable communities, front line workers and healthcare providers bounce back from humanitarian crises. Read more.',
  }

function Economic_Resilience() {
  return (

    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
        <Header/>
        <Banner/>
        <Economic/>
        <FrameworkAccordion/>
        <PartnersAnchoring/>
        <Footer/>
    
        </>
  )
}

export default  Economic_Resilience
