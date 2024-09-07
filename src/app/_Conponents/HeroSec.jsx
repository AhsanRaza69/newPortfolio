"use client"
import React, { useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'
import ProjectDetail from './ProjectDetail'
import { useScroll, motion, useTransform } from 'framer-motion';
import { fadeIn} from './variant';

const HeroSec = () => {



  return (
    <div className="" id='hero'>
      <ProjectDetail />
      <Container className=' text-white mb-[60%] md:mb-[40%]  relative  flex w-full justify-center'>

        <div className="   flex justify-center relative ">

          <div className="flex-col flex gap-y-4  justify-center  text-center ">
            <h3 className=' text-[clamp(12px,5vw,36px)] text-darkcolor playfair'>👋my name is Aamir Khan & I am a Graphic Designer</h3>
            <h1 className=' z-10  font-[900] archivor  text-[clamp(30px,9vw,100px)] '>Graphic Designer</h1>
            <h2 className=' playfair text-[clamp(30px,9vw,130px)]  oul'>&Photographer</h2>
            <p className=' text-xs  lg:text-lg text-darkcolor  sm:text-right'>based in Gilgit, Pakistan ❤️</p>

            <motion.div
              initial={{y:600, opacity : 0}}
              animate={{y:0, opacity : 1}}
              transition={{
                delay:'0.2',
                y:{
                  type:'spring',
                  stiffness:60
                },
                opacity:{duration:1},
                ease:"easeIn",
                duration:'0.4',
              }}

              className=" absolute     z-0  top-[20%]    md:top-[17%]  flex justify-center  items-center flex-col  w-full  ">
              <Image src="/heroimg.png" className=' h-auto w-[100%]  sm:w-[70%] md:w-[70%]   ' alt='Logo'
                width={650}
                height={700}
              />
              <motion.div
               initial={{y:-100, opacity : 0}}
               whileInView={{y:0, opacity : 1}}
               transition={{
                 delay:'0.3',
                 y:{
                   type:'spring',
                   stiffness:60
                 },
                 opacity:{duration:1},
                 ease:"easeIn",
                 duration:'0.4',
               }} className="h-auto w-[100%]  sm:w-[70%] md:w-[60%] xl:w-[50%] ">
              <Image src="/clientLogo.png" className='  ' alt='Logo'
                width={650}
                height={100}
              />
              </motion.div>
            </motion.div>
          </div>


        </div>
      </Container>
    </div>
  )
}

export default HeroSec
