
import React from 'react'
import Header from '@/component/Header'
import Banner from './Ourimpact/Banner'
import Footer from '@/component/Footer'
import Blog from './Ourimpact/Blog'


export const metadata = {
  title: 'Supporting last mile to overcome humanitarian crises',
  description: 'The impact that we have facilitated through our partnerships provided relief and helped vulnerable communities, front line workers and healthcare providers bounce back from humanitarian crises. Read more.',
}
function Impact() {
  return (
    <>
    <Header/>
    <Banner/>
    <Blog/>
    <Footer/>

    </>
  )
}

export default Impact
