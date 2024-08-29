import Link from 'next/link'
import React from 'react'

const Icons = ({icon,link}) => {
  return (
    <div className=' hover:text-webred duration-300 transition-all hover:-translate-y-1 rounded-lg  shadow-[#1c1e22_3px_0px_5px_4px] text-lg p-5 mt-1 bgg'>
        <Link href={link}>
        {icon}
        </Link>

    </div>
  )
}

export default Icons