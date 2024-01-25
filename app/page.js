
import Image from 'next/image';
import styles from './page.module.css';
import HomeBanner from '@/component/HomePage/HeroBanner';
import HomeCTA from '@/component/HomePage/HomeCTA';
import OurAction from '@/component/HomePage/OurAction';
import OurImpact from '@/component/HomePage/OurImpact';
import JoinUs from '@/component/HomePage/JoinUs';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Head from "next/head";


export const metadata = {
  title: 'Dynamic humanitarian emergency platform for community development',
  description: 'We are a dynamic humanitarian emergency platform that aims for community development and facilitate the sustainable economic and social growth of vulnerable people. Learn more.Generated by create next app',
}

export default function Home() {
  return (
    <>
    <Head>
  <link rel="icon" href="favicon.ico" type="" /> 
        </Head>
       <Header/>
      <HomeBanner/>
      <HomeCTA/>
      <OurAction/>
      <OurImpact/>
      <JoinUs/>
      <Footer/>

    </>
  )
}