import React from 'react';
import Header from '@/component/Header';
import Banner from './abouComponent/Banner';
import Ourvision from './abouComponent/Ourvision';
import Footer from '@/component/Footer';
import Seo from '../../component/Seo'


const title= 'Empowering the last mile to survive & thrive during humanitarian crises'
  const description = 'Through collaborative action, we empower vulnerable communities to survive and thrive during humanitarian emergencies and help them build resilience. Learn more.'
  const url = 'https://communityactioncollab.org/about-us'
const banner = "/images/about_banner_1.jpeg"
  
function About() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
    <Header/>
    <Banner/>
    <Ourvision/>
    <Footer/>
    
    </>
  )
}

export default About
