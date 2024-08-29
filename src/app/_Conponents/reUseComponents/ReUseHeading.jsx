import React from 'react'

const ReUseHeading = ({topPara,mainTitle}) => {
  return (
    <div className=' w-full py-4  px-3 '>
      <p className=' uppercase   font-[500] text-md text-webred'>
        {topPara}
      </p>
      <h2 className='  font-bold  text-gray-300  text-[clamp(34px,5vw,60px)] '>{mainTitle}</h2>
    </div>
  )
}

export default ReUseHeading