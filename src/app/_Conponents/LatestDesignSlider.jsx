"use client"
import Image from 'next/image'
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { DynamicDAtaFun } from '../redux/StoreSlice';



function LatestDesignSlider({topPara,para,gap,img}) {
  const dispatch = useDispatch()
  const details = {
    img : img,
    topPara : para
  }
  return (
    <div className={` w-full py-3    px-2 `}>
              <div className=" shadow-[#1c1e22_2px_2px_5px_4px] bgg gap-y-3 py-6 px-2 md:px-8  rounded-lg items-center justify-center ) flex flex-col  bg-center  ">
              <div className=" w-full  overflow-hidden rounded-md  ">
         <Image src={img} className='hover:scale-110 h-auto duration-300 transition-all w-full  rounded-md ' alt='Logo'
                    width={300}
                    height={300}
                />
                  
                </div>
                <div className="  flex w-full items-center">
                    <span className=" uppercase flex items-center w-full justify-between">
                      <p className=' text-webred font-medium cursor-pointer text-[12px]'>{topPara}</p>
                      {/* <span className=' hover:text-webred duration-300 transition-colors cursor-pointer   ease-out'>
                        <IoIosHeartEmpty/>
                      </span> */}
                    </span>
                </div>

                <h2 onClick={() => dispatch(DynamicDAtaFun(details))} className=' hover:text-webred duration-300 transition-all cursor-pointer text-calmp(20,5vh,23px) font-semibold '>
                    {para}
                </h2>
              </div>


             {/* <ProjectDetail/> */}
             


    </div>
  )
}

export default LatestDesignSlider