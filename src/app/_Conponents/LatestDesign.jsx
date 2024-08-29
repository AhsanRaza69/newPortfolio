import React from 'react'
import Container from './Container'
import ReUseHeading from './reUseComponents/ReUseHeading'
import ReUseButton from './reUseComponents/ReUseButton'
import LatestDesignSlider from './LatestDesignSlider'
import LatestDesignSlider2 from './LatestDesignSlider2'
import Blackline from './Blackline'

const LatestSec = () => {
  return (
    <div className=" py-8 flex-col gap-4 ">
      <div className="text-center">
      <ReUseHeading topPara={"Graphic designer, webdesigner & webflow expert"} mainTitle={"My Latest Design"} />
      </div>
      <Container className=" flex flex-col gap-4 ">
        <div className=" w-full overflow-x-hidden flex flex-col">
        <LatestDesignSlider2/>
      <div className=" flex w-full justify-center my-6">
      <ReUseButton round={true} title=" Let's start a project together "/>
      </div>
        </div>

        <Blackline/>
       
      

      

      
    </Container>
    </div>
  )
}

export default LatestSec