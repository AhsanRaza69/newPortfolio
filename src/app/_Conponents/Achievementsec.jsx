import Image from 'next/image'
import React from 'react'
import Container from './Container'

const Achievementsec = () => {
  return (
    <Container className='flex poppins flex-col gap-y-6'>
        <h2 className=' text-md text-gray-400 text-center'>⭐ My award & achievement ⭐</h2>
        <div className=" w-full flex justify-center">
        <Image  src="/ach.png" className=' opacity-50 hover:opacity-100  w-[80%] ' alt='Logo'
                    width={900}
                    height={200}
                />
        </div>
        
    </Container>
  )
}

export default Achievementsec