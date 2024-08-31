"use client"
import Image from 'next/image'
import { Link } from 'react-scroll';
import { IoMenu } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import ReUseButton from './reUseComponents/ReUseButton'
import ResponsiveNavBar from './ResponsiveNavBar'
import SocialInfo from './SocialInfo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [Nav, setNav] = useState(false)

    const links = [
        {
            name: "Hello",
            adress: "hero",

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
        if (Nav) {
      
            document.body.style.overflow = 'hidden';
        } else {
      
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [Nav]);

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
        <div className={`${isScrolled ? '  backdrop-blur-md fixed top-0 left-0 w-full bg-webColor/80 shadow-md z-50' : 'relative'
            } transition-all duration-300 flex px-6  lg:px-12 py-4 justify-between `} >
            <div className=" flex  items-center ">
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
                            <li key={ind} className={` navLinks cursor-pointer  hover:text-webred duration-300      font-medium text-[13px] hidden lg:flex  text-darkcolor uppercase`}>
                                <Link
                                    to={item.adress}
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={2000} >
                                    {item.name}
                                </Link>
                            </li>

                        ))
                    }
                    <ReUseButton title={"Hello@gmail.com"} />
                </ul>
                <div className=" lg:hidden p-3 ml-3 z-50  bg-zinc-900 rounded-full text-webred">
                    <IoMenu size={25} onClick={() => setNav(!Nav)} />
                </div>
                {
                    Nav && (
                        <div className=' bg-[#191b1e] w-[330px] py-2 text-gray-400 gap-2 px-3 absolute top-0 py left-0 md:w-[375px] z-40 h-screen overflow-hidden flex-col flex'>
                            <div className=" flex  items-center ">
                                <Image src="/logo.png" alt='Logo'
                                    width={130}
                                    height={130}
                                />
                                {/* <h2 className='darktext'>INBIO</h2> */}
                            </div>
                            <h2 >Inbio is a all in one personal portfolio WordPress theme. You can customize everything.</h2>
                            <hr className=' w-full my-2 border-gray-300' />
                            <ul className=' flex flex-col  gap-2 ' >
                                {
                                    links.map((item, ind) => (
                                        <div className=' w-full  py-3 h-full' >
                                        <li key={ind} className={` cursor-pointer navLinks  hover:text-webred duration-300       font-medium text-[13px]    flex  text-darkcolor uppercase`} >
                                           <Link 
                                           onClick={(e) => {
                                            e.stopPropagation(); 
                                            setNav(false);
                                        }}
                                                to={item.adress}
                                                spy={true}
                                                smooth={true}
                                                offset={-150}
                                                duration={2000} >
                                                {item.name}
                                            </Link>
                                        </li>
                                           </div>

                                    ))
                                }

                            </ul>
                            <hr className=' w-full my-1 border-gray-300' />
                            <SocialInfo/>
                        </div>
                    )
                }
                <div>
                </div>
            </div>


        </div>
    )
}

export default Header