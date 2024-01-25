import React from 'react';
import Header from '@/component/Header';
import Banner from './abouComponent/Banner';
import Ourvision from './abouComponent/Ourvision';
import Footer from '@/component/Footer';


export const metadata = {
  title: 'Empowering the last mile to survive & thrive during humanitarian crises',
  description: 'Through collaborative action, we empower vulnerable communities to survive and thrive during humanitarian emergencies and help them build resilience. Learn more.',
}
function About() {
  return (
    <>
    <Header/>
    <Banner/>
    <Ourvision/>
    <Footer/>
    
    </>
  )
}

export default About
