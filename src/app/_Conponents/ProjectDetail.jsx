'use client'
import { useSelector } from 'react-redux'

const ProjectDetail = () => {

    const {dynamicRouteCOn} = useSelector((state)=>state.store)
    console.log(dynamicRouteCOn);
  return (
    <div className="">
     
          <div className=' absolute z-50 top-0 left-0 w-full h-screen bg-red-500/50'>
        adasdasdasdasd
    </div>
        
    </div>
  )
}

export default ProjectDetail