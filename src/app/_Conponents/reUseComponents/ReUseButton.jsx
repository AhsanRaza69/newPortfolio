import Link from 'next/link'
import React from 'react'

const ReUseButton = ({ title, link, round,w}) => {
  return (
    <div className=''>
      <Link href={"link"}>

        <button className={` ${round ? " rounded-full" : " rounded-lg"} z-10  transition  bgg shadow-lg   shadow-gray-900  ${ w }    ease-in-outout bg-webColor text-xs  sm:text-sm hover:text-webred text-webred    px-6 hover:-translate-y-2  duration-300 flex items-center justify-center py-4 `} >
          <span className=' font-[500]'> {title}</span>
        </button>
      </Link>
    </div>
  )
}

export default ReUseButton