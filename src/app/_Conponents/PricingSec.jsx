import React from 'react'
import Container from './Container'
import ReUseHeading from './reUseComponents/ReUseHeading'
import PriceCard from './PriceCard'
import Blackline from './Blackline'

const PricingSec = () => {
  return (
   <div className=" poppins" id='pricing'>
     <Container className=" my-20 grid gap-6 md:grid-cols-3">
         <div className='  flex-col gap-3 items-start text-left'>
         <ReUseHeading
         topPara={"Pricing"}
         mainTitle={"Pricing 🚀"}
         />
         <p className=' px-3 text-gray-400'>
         Use the free templates with your whole team or choose a premium. ith your whole team or choose a premium.
            <br />
            <br />
         Get the bundle and get lifetime support and one year updates.
         </p>
         </div>
         <div className=" flex gap-2  ">
          <PriceCard title={"STARTER"} Stiitle={"Try and decide."}
          price={0}
          />
                 </div>
          <div className="">
          <PriceCard title={"BUNDLE"} Stiitle={"Try and decide."}
          price={60}
          />
          </div>

        

    </Container>
    <Blackline/>
   </div>
  )
}

export default PricingSec