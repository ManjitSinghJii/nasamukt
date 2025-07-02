import React from 'react'
import Slider from '../lib/Slider'
import YouTubVideo from '../lib/YouTubVideo'
import ProductCards from '../lib/ProductCards'
import CustomerFormModal from '../lib/CustomerFormModal'
import LatMuktPage from '../lib/LatMuktPage'
import Shop from './Shop'
import ProductDetails from './ProductDetails'

const Home = () => {
  return (
    <div className=''>
        <Slider />
        <Shop />
        <YouTubVideo />
        <ProductCards />
        <ProductDetails />
        <CustomerFormModal/>
        <LatMuktPage/>
    </div>
  )
}

export default Home