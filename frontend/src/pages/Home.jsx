import React from 'react'
import Header from '../components/Header'
import Speaciality from '../components/Speaciality'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Hero from './../components/Hero'
import Wards from '../components/Wards'

const Home = () => {
  return (
    <div>
       <Hero/>
      {/* <Header/> */}
      {/* <Speaciality/> */}
      <TopDoctors/>
      <Wards/>
      <Banner/>

    </div>
  )
}

export default Home
