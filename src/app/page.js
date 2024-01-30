

import Image from "next/image";
import HomeBanner from '../../component/HomePage/HeroBanner';
import HomeCTA from '../../component/HomePage/HomeCTA';
import OurAction from '../../component/HomePage/OurAction';
import OurImpact from '../../component/HomePage/OurImpact';
import JoinUs from '../../component/HomePage/JoinUs';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Stories from '../../component/HomePage/Stories';
import Seo from '../../component/Seo'

const title= 'Dynamic humanitarian emergency platform for community development'
  const description = 'We are a dynamic humanitarian emergency platform that aims for community development and facilitate the sustainable economic and social growth of vulnerable people. Learn more.'
  const url = 'https://communityactioncollab.org/'
  const banner ="/images/Highcompressed_712800817.png"


export default function Home() {
  return (
    <>
      <Seo title={title} description={description} path={url} metaImage={banner} />
      <Header/>
      <HomeBanner />
      <HomeCTA />
      <OurAction />
      <OurImpact>
      </OurImpact>
      <Stories/>
      <JoinUs />
      <Footer/>
    </>
  );
}
