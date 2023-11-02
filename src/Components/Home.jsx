import React from 'react'
import BannerSection from './BannerSection'
import Navbar from './Navbar'
import { OurMission } from './OurMission'
import { OurVision } from './OurVision'
import { OurServices } from './OurServices'
import { WhyChooseUs } from './WhyChooseUs'
import { ServingGlobal } from './ServingGlobal'
import { Footer } from './Footer'
import Insurance from './Insurance'
import Payment from './Payment'
import OurTeam from './OurTeam'

function Home() {
  return (
    <div>
        <div>
            <BannerSection/>
            <OurMission/>
            <OurVision/>
            <OurServices/> 
            {/* <OurTeam/> */}
            <WhyChooseUs/>
            <ServingGlobal/>
            <Insurance/>
            <Payment/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home