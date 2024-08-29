"use client"
import Image from 'next/image'
import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react'
import ReUseButton from './reUseComponents/ReUseButton'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        {
            name: "Hello",
            adress: "",
           color: true
        },
        {
            name: "Design",
            adress: "design"
        },
        {
            name: "Photos",
            adress: "photos"
        },
        {
            name: "pricing",
            adress: "pricing"
        },
        {
            name: "hire me",
            adress: "hireme"
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div  className={`${
            isScrolled ? '  backdrop-blur-md fixed top-0 left-0 w-full bg-webColor/80 shadow-md z-50' : 'relative'
          } transition-all duration-300 flex px-6  lg:px-12 py-4 justify-between `} >
            <div className=" flex items-center ">
                <Image src="/logo.png" alt='Logo'
                    width={130}
                    height={130}
                />
                {/* <h2 className='darktext'>INBIO</h2> */}
            </div>
            <div className=" flex items-center">
                <ul className=' flex  gap-8 items-center' >
                    {
                        links.map((item, ind) => (
                            <li key={ind} className={` ${ item.color ? " text-white" : ""} hover:text-webred duration-300      font-medium text-[13px] hidden lg:flex  text-darkcolor uppercase`}>
                                <Link
                                 to={item.adress} 
                                 spy={true} 
                                 smooth={true} 
                                 offset={-150}
                                 duration={1000} >
                                    {item.name}
                                </Link>
                            </li>

                        )) 
                    }
                 <ReUseButton title={"Hello@gmail.com"}/>
                </ul>
                <div>
                </div>
            </div>

            <div className="">
                
            </div>
        </div>
    )
}

export default Header