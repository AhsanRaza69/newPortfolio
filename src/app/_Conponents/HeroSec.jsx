"use client"
import React, { useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'
import ProjectDetail from './ProjectDetail'
import { useScroll,motion, useTransform } from 'framer-motion';

const HeroSec = () => {
  
  const { scrollY } = useScroll();
  
  // Example: Transform the opacity based on scroll position
  // const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div className="" id='hero'>
      <ProjectDetail  />
      <Container className=' text-white mb-[60%] md:mb-[40%]  relative  flex w-full justify-center'>

        <div className="   flex justify-center relative ">

          <div className="flex-col flex  justify-center  text-center ">
            <h3 className=' text-[clamp(12px,5vw,36px)] text-darkcolor playfair'>👋my name is Inbio & I am a freelance</h3>
            <h1 className=' z-10  font-[900] archivor  text-[clamp(30px,9vw,130px)] '>Webdesigner</h1>
            <h2 className=' playfair text-[clamp(30px,9vw,130px)]  oul'>&Photographer</h2>
            <p className=' text-xs  lg:text-lg text-darkcolor  sm:text-right'>based in Nevada, USA ❤️</p>

            <motion.div

          

              className=" absolute     z-0  top-[20%]    md:top-[17%]  flex justify-center  items-center flex-col  w-full  ">
              <Image src="/heroimg.png" className=' h-auto w-[100%]  sm:w-[70%] md:w-[80%]   ' alt='Logo'
                width={650}
                height={700}
              />
              <Image src="/clientLogo.png" className=' h-auto w-[100%]  sm:w-[70%] md:w-[60%] xl:w-[50%]  ' alt='Logo'
                width={650}
                height={100}
              />
          </motion.div>
            </div>


        </div>
      </Container>
    </div>
  )
}

export default HeroSec
