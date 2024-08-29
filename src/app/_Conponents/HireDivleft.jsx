import Image from 'next/image'
import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { ImLinkedin2 } from "react-icons/im";
import Icons from "./Icons";


const HireDivleft = () => {
    const iconsinfo = [
        {
            icon : <FiTwitter/>,
            link : "www.twiter.com"
        },
        {
            icon : <SlSocialFacebook/>,
            link : "www.facebook.com"
        },
        {
            icon : <ImLinkedin2/>,
            link : "www.linkedin.com"
        }
    ]
  return (
    <div className='  rounded-lg shadow-[#1c1e22_3px_0px_5px_4px] flex flex-col items-center w-full   gap-7 px-8 py-8 '>
        <div className=" w-full overflow-hidden">
             <Image src="/hireimg.jpg" className='  w-full rounded-lg hover:scale-105 duration-300 transition-all ease-in-out    ' alt='Logo'
              width={350}
              height={300}
            />
        </div>
        <div className=" text-gray-400 font-normal flex-col justify-center w-full  flex gap-5">
            <h2 className=' text-gray-100 font-bold text-[clamp(20px,5vw,26px)]'>Jone Kartik</h2>
            <h3>Designer & Photographer</h3>
            <h2 className=' font-normal text-[18px]'>I am available for freelance work. Connect with me via call in to my account.</h2>
            <span>
                <p className='' >Phone:
                    <span className=''>
                    +01234567890
                    </span>
                </p>
                <p className='' > Email: 
                    <span className=''>
                   admin@example.com
                    </span>
                </p>
            </span>

            <div className=" flex flex-col gap-3">
                <h2>FIND WITH ME</h2>
                 <div className=" flex items-center gap-3">
                   {
                    iconsinfo.map((item ,ind)=>(
                       <div key={ind} className="">
                         <Icons icon={item.icon} link={item.link}/>
                       </div>
                    ))
                   }
                 </div>
            </div>  
        </div>
    </div>
  )
}

export default HireDivleft