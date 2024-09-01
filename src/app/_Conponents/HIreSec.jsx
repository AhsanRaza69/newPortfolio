import React from 'react'
import ReUseHeading from './reUseComponents/ReUseHeading'
import Container from './Container'
import HireDivleft from './HireDivleft'
import HireDivRight from './HireDivRIght'
import Blackline from './Blackline'

const HIreSec = () => {
  return (
    <div className=" my-3" id='hireme'>
      <Container className=' flex flex-col  poppins'  >
       <div className=" w-full">
       <div className=" text-center">
        <ReUseHeading topPara={"Let's meet!"}  mainTitle={"Hire Me 🚣"}/> 
        </div>
       <div className=" grid w-full grid-cols-1 md:px-8 justify-center gap-y-6   lg:grid-cols-3 lg:gap-x-4">
          <HireDivleft/>
          <HireDivRight/>
       </div>
       </div>
        
       <Blackline/>
       
    </Container>
    </div>
  )
}

export default HIreSec