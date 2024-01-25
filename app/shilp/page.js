"use client"

import Header from '@/component/Header'
import React from 'react';
import Banner from './shilp/Banner';
import Footer from '@/component/Footer'
import Aboutshilp from './shilp/Aboutshilp';
import CardWithImage from './shilp/Shilpdetails';

function shilp (){
  return (
    <>
   <Header/>
   <Banner/>
   <Aboutshilp/>
   <CardWithImage/>
   <Footer/>

   </>
  )
}

export default shilp