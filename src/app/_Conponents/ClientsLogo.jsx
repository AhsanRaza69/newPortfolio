"use client"

import Image from "next/image"

const ClientsLogo = ({logo,ClientName}) => {
    // console.log(logo);
  return (
    <div className=' flex-col justify-evenly text-center gap-5 px-6 rounded-md w-[350px]    md:w-[250px]  flex  shadow-[#1c1e22_3px_0px_5px_4px] bgg  cursor-pointer py-8'>
        <div className=" flex justify-center   w-full ">
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80}
          className=" hover:scale-125 duration-200 "
        />
        </div>
        <div className="border w-full border-[#1a1d23]"></div>
        <h2 className="  text-gray-300 font-[500] hover:text-webred duration-200">{ClientName}</h2>
    </div>
  )
}

export default ClientsLogo