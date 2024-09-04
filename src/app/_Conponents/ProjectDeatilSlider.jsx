"use client"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import LatestDesignSlider from './LatestDesignSlider';
// import Slider from "react-slick";
import Image from "next/image";


const Projectdeslider = ({img}) => {
  

  return (
    <div className="  text-white    mx-auto    " >
  
       
        <div className="  flex px-4 rounded-lg justify-center ">
        <Image src={img} className='  w-full  rounded-md ' alt='Logo'
                    width={600}
                    height={600}
                />
                
        </div>
        

    </div>
  );
}
export default Projectdeslider