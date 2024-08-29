import { MdKeyboardArrowRight } from 'react-icons/md'
import { GiSevenPointedStar } from 'react-icons/gi'
import Link from 'next/link'

const HireDivRIght = () => {
  return (
    <div className=' w-full  shadow-[#1c1e22_3px_0px_5px_4px] rounded-lg col-span-2  py-4'>
      <div className="  w-full col-span-2 px-[15px]  "> 
          <form action="" className='  text-gray-400  flex flex-col gap-y-5'>
           <div className="   md:flex  items-baseline  gap-5">
           <label htmlFor=" userName" className=' w-full  flex flex-col gap-y-6  '>
             <span className=" flex capitalize  font-medium ">
             Your Name
                        </span>
            <input 
            className=' bodersha'
            type="text"
            name='userName'
            id='userName'
            // value={formik.values.userName}
            />
            
           </label><label htmlFor=" userName" className=' w-full  flex flex-col gap-y-6  '>
             <span className=" flex capitalize  font-medium ">
             Phone Number
                        </span>
            <input 
            className='bodersha'
            type="text"
            name='userphone'
            id='userphone'
            // value={formik.values.userName}
            />
            
           </label>
           </div>
           <label htmlFor=" email" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Email
                        </span>
            <input className='bodersha' type="email" name='email'/>
           </label>
           <label htmlFor=" subject" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Subject 
             
            </span>
            <input className='bodersha' type="text" name='subject'/>
           </label>
           <label htmlFor=" message" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Message
             
            </span>
            <textarea
             className='bodershames'
             name='message'/>
           </label>
           <div className=''>
      <Link href={"link"}>

        <button className={`   transition 
         shadow-[#1c1e22_2px_4px_5px_4px]  ease-in-outout bg-webColor text-xs  sm:text-sm text-gray-400  w-full   px-6 hover:-translate-y-2  duration-300 flex items-center justify-center py-4 `} >
          <span className=' font-[500]'> SEND MESSAGE </span>
        </button>
      </Link>
    </div>
          </form>
             </div>
    </div>
  )
}

export default HireDivRIght