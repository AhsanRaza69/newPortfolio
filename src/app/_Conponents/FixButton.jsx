import React, { useState } from 'react'
import { useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const FixButton = () => {
    const [ShowButton, setShowButton] = useState(false)

    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    
    //   };
    
      useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          }
      },[setShowButton])
    
  return (
    <div className="">
      {
        ShowButton && (
          <div onClick={scrollToTop} className={`  bg-webBlue text-white p-4 right-3 bottom-3 rounded-md cursor-pointer text-xl fixed`}>
        <IoIosArrowUp/>
    </div>
        )
      }
    </div>
  )
}

export default FixButton