"use client"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import LatestDesignSlider from './LatestDesignSlider';
import Slider from "react-slick";


const LatestPhoto = () => {
  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <div className=" hidden p-3 bg-webColor hover:text-webred rounded-full cursor-pointer duration-200  text-2xl lg:flex items-center justify-center z-20 absolute left-5 top-[40%]" onClick={onClick}>
        <PiCaretLeftLight />
      </div>
    )
  }
  const PrevArrow = (props) => {

    const { onClick } = props
    return (
      <div className="p-3 hidden bg-webColor hover:text-webred rounded-full cursor-pointer duration-200  text-2xl lg:flex items-center justify-center z-20 absolute      right-5 top-[40%]" onClick={onClick}>
        <PiCaretRightLight />
      </div>

    )

  }
  let settings = {
    dots: false,
    arrows: true,
    responsive: [
    
      {
        breakpoint: 742,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    ,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

  return (
    <div className="   text-white w-full relative flex  flex-col gap-3    " id="photos">
      <Slider  {...settings} className=" ">
        <div className=' fle '>
        <LatestDesignSlider topPara={"GAllery"} 
        para="Front view woman wearing trucker hat. 
        
         "
         img="/lw2.jpg"
         />
        </div>
        <div className=' 
        '>
        <LatestDesignSlider gap={true} topPara={"GAllery"} 
        img="/newimg.jpg"
        para="Portrait of pretty blonde model sitting on table. "/>

        </div>
        <div>
        <LatestDesignSlider topPara={"GAllery"} 
        img="/lw3.jpg"para="Portrait of pretty blonde model sitting on table. "/>
          
        </div>
        

      </Slider>
    </div>
  );
}
export default LatestPhoto