import React from 'react'
import PageBanner from '../Component/PageBanner'
import WhoWeAre from '../Component/About/WhoWeAre'
import OurCoreValues from '../Component/About/OurCoreValues'
import OurStory from '../Component/About/OurStory'
import WhatWeOffer from '../Component/About/WhatWeOffer'
import MissionVission from '../Component/About/MissionVission'

const AboutUs = () => {
  return (
    <div>
       <PageBanner 
     title="About Us"
     subtitle="Enjoy the latest movies on the big screen"
      backgroundImage="/images1.jpg"
      /> 




        {/* Who We Are*/}
      <WhoWeAre/>

      {/*OurCoreValues*/}
    <OurCoreValues/>

    {/*OurStory*/}
    <OurStory/>

    {/*What We Offer*/}
    <WhatWeOffer/>

    {/*MissionVission*/}
    <MissionVission/>

    </div>
  )
}

export default AboutUs