import { CarouselPlugin } from '@/components/landingpage/carousel/carousel'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

function Landingpage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='w-full flex justify-center pt-10'>
        <CarouselPlugin></CarouselPlugin>
      </div>
    </div>
  )
}

export default Landingpage