import React from 'react'
import Slider from '../lib/Slider'
import YouTubVideo from '../lib/YouTubVideo'
import ProductCards from '../lib/ProductCards'
import CustomerFormModal from '../lib/CustomerFormModal'
import LatMuktPage from '../lib/LatMuktPage'

const Home = () => {
  return (
    <div>
        <Slider />
        <YouTubVideo />
        <ProductCards />
        <CustomerFormModal/>
        <LatMuktPage/>
    </div>
  )
}

export default Home