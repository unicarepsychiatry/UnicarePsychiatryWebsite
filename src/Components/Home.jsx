import React from 'react'
import BannerSection from './BannerSection'
import Navbar from './Navbar'
import { OurMission } from './OurMission'
import { OurVision } from './OurVision'
import { OurServices } from './OurServices'

function Home() {
  return (
    <div>
        <div>
            <BannerSection/>
            <OurMission/>
            <OurVision/>
            <OurServices/>
        </div>
        <div className="container">
        </div>
    </div>
  )
}

export default Home