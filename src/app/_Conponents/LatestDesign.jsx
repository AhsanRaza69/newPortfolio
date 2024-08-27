import React from 'react'
import Container from './Container'
import ReUseHeading from './reUseComponents/ReUseHeading'
import ReUseButton from './reUseComponents/ReUseButton'
import LatestDesignSlider from './LatestDesignSlider'
import LatestDesignSlider2 from './LatestDesignSlider2'

const LatestSec = () => {
  return (
    <div className=" py-8 flex-col gap-4 ">
      <ReUseHeading topPara={"Graphic designer, webdesigner & webflow expert"} mainTitle={"My Latest Design"} />
      <Container className=" flex flex-col gap-4 ">
        <div className=" w-full overflow-x-hidden flex flex-col">
        <LatestDesignSlider2/>
      <div className=" flex w-full justify-center my-6">
      <ReUseButton round={true} title=" Let's start a project together "/>
      </div>
        </div>

        <hr className=' w-full border-black/50 my-6' />
       
      

      

      
    </Container>
    </div>
  )
}

export default LatestSec