import Header from '@/component/Header';
import React from 'react';
import Footer from '@/component/Footer'
import Banner from './resource/Banner';
import Knowledgebase from './resource/Knowledgebase';


export const metadata = {
    title: 'Empowering communities to build resilience & bounce forwards',
    description: 'Partner with us if you are passionate about empowering communities and facilitating community development to help them build resilience. Find out more.',
  }

function page() {
  return (
    <>
      <Header/>
      <Banner/>
      <Knowledgebase/>
      <Footer/>
    </>
  )
}

export default page
