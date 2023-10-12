import React from 'react'
import BannerSection from './BannerSection'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
        <div>
            <Navbar/>
            <BannerSection/>
        </div>
        <div className="container">
        </div>
    </div>
  )
}

export default Home