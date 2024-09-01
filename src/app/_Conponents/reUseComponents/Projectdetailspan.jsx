import React from 'react'

const Projectdetailspan = ({name,detail}) => {
  return (
    <span className=' flex gap-3 font-semibold text-gray-400'>
    {name}:
      <span className=' text-gray-200 font-[300]'>
     { detail}
      </span>
    </span>
  )
}

export default Projectdetailspan