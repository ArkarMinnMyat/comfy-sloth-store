import React from 'react'
import {Hero} from './Hero'
import {FeaturedProducts} from './FeaturedProducts'
import {Services} from './Services'
import {Contact} from './Contact'




export const Home = () => {
  return (
    <>
        <main>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contact />
        </main>
    </>
  )
}
