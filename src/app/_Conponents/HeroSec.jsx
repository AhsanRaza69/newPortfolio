"use client"
import React, { useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSec = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // duration of animation in ms
      easing: 'ease-out', // easing function
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
   <div className="" id='hero'>
     <Container className=' text-white mb-[13rem]  md:mb-[13x rem] relative  flex w-full justify-center'>

<div className="   flex justify-center relative ">

  <div className="flex-col flex  justify-center  text-center ">
    <h3 className=' text-[clamp(12px,5vw,36px)] text-darkcolor playfair'>👋my name is Inbio & I am a freelance</h3>
    <h1 className=' z-10  font-semibold archivor  text-[clamp(30px,9vw,130px)] '>Webdesigner</h1>
    <h2 className=' playfair text-[clamp(30px,9vw,130px)] font-[500]'>&Photographer</h2>
    <p className=' text-xs  lg:text-lg text-darkcolor  sm:text-right'>based in Nevada, USA ❤️</p>

    <div data-aos="fade-up"
      data-aos-anchor-placement="top-bottom" className=" absolute   delay-500 z-0  -translate-y-22 duration-300 transition-transform top-[20%]    md:top-[17%]  flex justify-center  items-center flex-col  w-full  ">
      <Image src="/heroimg.png" className=' h-auto w-[100%]  sm:w-[70%] md:w-[60%] xl:w-[50%]  ' alt='Logo'
        width={650}
        height={700}
      />
      <Image src="/clientLogo.png" className=' h-auto w-[100%]  sm:w-[70%] md:w-[60%] xl:w-[50%]  ' alt='Logo'
        width={650}
        height={100}
      />
    </div>
  </div>


</div>
</Container>
   </div>
  )
}

export default HeroSec
