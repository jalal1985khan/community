import React from 'react'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import Contactform from './contact/Contactform'


export const metadata = {
  title: 'Collaborate to create impact in lives of the last mile',
  description: 'Reach out to us to learn more about how we help build resilience amongst the vulnerable communities and help them bounce forward through collaborative action.',
}
function page() {
  return (
    <>
    <Header/>
    <Contactform/>
    <Footer/>

    </>
  )
}

export default page
