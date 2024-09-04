import React from 'react'
import Container from './Container'
import ReUseHeading from './reUseComponents/ReUseHeading'
import PriceCard from './PriceCard'
import Blackline from './Blackline'
import { motion} from 'framer-motion'

const PricingSec = () => {
  return (
   <div className=" poppins" id='pricing'>
     <Container className=" my-20 grid gap-6 lg:grid-cols-3">
         <div className='  flex-col gap-3  text-left'>
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
          {/* <motion.div
          initial={{y:400, opacity : 0}}
          whileInView={{y:0, opacity : 1}}
          transition={{
            delay:'0.3',
            opacity:{duration:1},
            ease:"easeIn",
            duration:'0.5',
          }}
          > */}
          <PriceCard c title={"STARTER"} Stiitle={"Try and decide."}
          price={0}
          />
          {/* </motion.div> */}
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