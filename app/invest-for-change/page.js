
import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import Content from './Content'
import Contact from './Contact'




export const metadata = {
  title: 'Supporting last mile to overcome humanitarian crises',
  description: 'The impact that we have facilitated through our partnerships provided relief and helped vulnerable communities, front line workers and healthcare providers bounce back from humanitarian crises. Read more.',
}
function Impact() {
  return (
    <>
    <Header/>
          <Banner />
      <Content />
      <Contact/>
    <Footer/>

    </>
  )
}

export default Impact
