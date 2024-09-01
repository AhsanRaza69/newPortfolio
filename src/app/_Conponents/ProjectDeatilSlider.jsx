"use client"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import LatestDesignSlider from './LatestDesignSlider';
import Slider from "react-slick";
import Image from "next/image";


const Projectdeslider = () => {
  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <div className=" hidden p-4 bg-webColor hover:text-webred rounded-full cursor-pointer duration-200  text-2xl lg:flex items-center  justify-center z-20 absolute left-0 top-[40%]" onClick={onClick}>
        <PiCaretLeftLight />
      </div>
    )
  }
  const PrevArrow = (props) => {

    const { onClick } = props
    return (
      <div className="p-4 hidden bg-webColor hover:text-webred rounded-full cursor-pointer duration-200  text-2xl lg:flex items-center justify-center z-20 absolute      right-0 top-[40%]" onClick={onClick}>
        <PiCaretRightLight />
      </div>

    )

  }
  let settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1 ,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

  return (
    <div className="  text-white    mx-auto    " >
      <Slider  {...settings} >
       
        <div className="  flex px-4 rounded-lg justify-center ">
        <Image src='/sl1.jpg' className='  w-full  rounded-md ' alt='Logo'
                    width={600}
                    height={600}
                />
                
        </div>
        <div className=" px-4 w-full">
        <Image src='/sl2.jpg' className=' w-full   rounded-md ' alt='Logo2'
                    width={600}
                    height={600}
                />
                
        </div>
        

      </Slider>
    </div>
  );
}
export default Projectdeslider