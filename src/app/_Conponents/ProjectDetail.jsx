'use client'
import { PiCaretLeftLight } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux'
import { DynamicDAtaFun } from '../redux/StoreSlice';
import Projectdeslider from './ProjectDeatilSlider'
import Projectdetailspan from './reUseComponents/Projectdetailspan'
import Blackline from './Blackline';

const ProjectDetail = () => {

  const { dynamicRouteCOn } = useSelector((state) => state.store)
  const dispatch = useDispatch()
  console.log(dynamicRouteCOn);
  return (
    <div className="">
      {
        dynamicRouteCOn && (
          <div className=' fixed  h-auto  overflow-auto  py-8 flex items-center justify-center z-50 top-0 left-0 w-full pt-20    bg-webColor'>
           
           <div className= " overflow-auto   text-gray-300 mt-28  w-[90%] md:w-[85%] p-4  md:p-11  bg-webColor rounded-lg shadow-[#1c1e22_2px_12px_18px_20px]  ">

            {/* btn */}
           <div className="  absolute px-4 py-2 font-[600]    bg-webColor shadow-Z[#1c1e22_2px_12px_18px_20px] text-webred rounded-full hover:scale-105  cursor-pointer duration-200  text-2xl lg:flex items-center justify-center z-20 right-3   top-3" onClick={()=>dispatch(DynamicDAtaFun())}>
        x
      </div>

             <div className="  w-full">
               
               {/* div1/ */}
               <div className=" grid gap-4 grid-cols-1 lg:grid-cols-2 ">
                <div className=" relative  grid-cols-1">  
                  
                <Projectdeslider/>
                </div>
                <div className=" flex flex-col gap-6  text-gray-300">
                  <h2 className=' font-bold text-[clamp(24px,5vw,34px)]'>NFT Dashboard Application Development.</h2>
                  <p>Through a wide variety of mobile applications, we’ve developed a unique visual system.</p>
                  <div className=" grid grid-cols-1 gap-3 lg:grid-cols-2">
                    <Projectdetailspan name={"Client"} detail={"George Wallace"} />
                    <Projectdetailspan name={"Date"} detail={"15 June 2022"} />
                    <Projectdetailspan name={"Services"} detail={"Web Application"} />
                    <Projectdetailspan name={"Budget"} detail={"$100000+"} />
                  </div>
                </div>

               </div>
           <Blackline/>
           <p>
           There are always some stocks, which illusively scale lofty heights in a given time period. However, the good show doesn’t last for these overblown toxic stocks as their current price is not justified by their fundamental strength.
           </p>
          
             </div>

           </div>
          </div>
        )
      }

    </div>
  )
}

export default ProjectDetail