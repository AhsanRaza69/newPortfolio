import React from 'react'
import Container from './Container'
import ReUseHeading from './reUseComponents/ReUseHeading'
import ReUseButton from './reUseComponents/ReUseButton'
import LatestDesignSlider2 from './LatestDesignSlider2'
import LatestPhoto from './LatestPhoto'

const LatestProject = () => {
    return (
        <div className=" py-8 flex-col gap-4 ">
        <div className="text-center">
        <ReUseHeading topPara={"Graphic designer, webdesigner & webflow expert"} mainTitle={"My Latest Photography"} />
        </div>
        <Container className=" flex flex-col gap-4 ">
          <div className=" w-full overflow-x-hidden flex flex-col">
          <LatestPhoto/>
        <div className=" flex w-full justify-center my-6">
        <ReUseButton round={true} title=" Let's start a project together "/>
        </div>
          </div>
  
         
         
        
  
        
  
        
      </Container>
      </div>
    )
}

export default LatestProject