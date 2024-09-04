import { motion, useAnimation } from 'framer-motion';
import { fadeIn} from '../variant';

const ReUseHeading = ({topPara,mainTitle}) => {

  return (
    <motion.div
    initial={{y:100, opacity : 0}}
    whileInView={{y:0, opacity : 1}}
    transition={{
      delay:'0.1',
      // y:{
      //   type:'spring',
      //   stiffness:60
      // },
      opacity:{duration:1},
      ease:"easeIn",
      duration:'0.5',
    }}
 className=' w-full py-4  px-3 '>
      <p className=' uppercase   font-[500] text-md text-webred'>
        {topPara}
      </p>
      <h2 className='  font-bold  text-gray-300  text-[clamp(34px,5vw,60px)] '>{mainTitle}</h2>
    </  motion.div>
  )
}

export default ReUseHeading