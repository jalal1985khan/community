import React from 'react';
import Header from '@/component/Header'
import Banner from './EconomicResilience/Banner';
import Economic from './EconomicResilience/Economic';
import Footer from '@/component/Footer';
import FrameworkAccordion from './EconomicResilience/FrameworkAccordion';
import PartnersAnchoring from './EconomicResilience/PartnersAnchoring';



export const metadata = {
    title: 'Supporting last mile to overcome humanitarian crises',
    description: 'The impact that we have facilitated through our partnerships provided relief and helped vulnerable communities, front line workers and healthcare providers bounce back from humanitarian crises. Read more.',
  }

function Economic_Resilience() {
  return (

        <>
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
