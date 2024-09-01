import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';


const ReUseHeading = ({topPara,mainTitle}) => {
  // const controls = useAnimation();
  // const { ref, inView } = useInView({
  //   threshold: 0.2, // Trigger the animation when 20% of the component is visible
  // });

  // React.useEffect(() => {
  //   if (inView) {
  //     controls.start({ y: 0, opacity: 1 });
  //   } else {
  //     controls.start({ y: 100, opacity: 0 });
  //   }
  // }, [controls, inView]);

  return (
    <div
    // ref={ref}
    // animate={controls}
    // initial={{ y: 100, opacity: 0 }}
    transition={{ duration: 0.5 }} className=' w-full py-4  px-3 '>
      <p className=' uppercase   font-[500] text-md text-webred'>
        {topPara}
      </p>
      <h2 className='  font-bold  text-gray-300  text-[clamp(34px,5vw,60px)] '>{mainTitle}</h2>
    </  div>
  )
}

export default ReUseHeading