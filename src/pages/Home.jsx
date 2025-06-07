import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDeal from '../components/BestDeal'
import Getdiscount from '../components/Getdiscount'
import PopularProducts from '../components/PopularProducts'
import HeroTwo from '../components/HeroTwo'

function Home() {
  return (
    <div>
      <Hero/>
      <ShopCategories/>
      <BestDeal/>
      <Getdiscount/>
      <PopularProducts/>
      <HeroTwo/>
    </div>
  )
}

export default Home
