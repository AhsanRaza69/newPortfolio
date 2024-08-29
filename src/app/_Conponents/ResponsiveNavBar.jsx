import { Link } from 'react-scroll';
import ReUseButton from './reUseComponents/ReUseButton';

const ResponsiveNavBar = () => {
    const links = [
        {
            name: "Hello",
            adress: "hero",
           
        },
        {
            name: "Design",
            adress: "design"
        },
        {
            name: "Photos",
            adress: "photos"
        },
        {
            name: "pricing",
            adress: "pricing"
        },
        {
            name: "hire me",
            adress: "hireme"
        },
    ]
  return (
    <div className=' bg-[#191b1e] absolute top-0 left-0 w-[375px] z-40 h-screen flex-col flex'>
       <h2>Inbio is a all in one personal portfolio WordPress theme. You can customize everything.</h2>
       <ul className=' flex flex-col  gap-8 items-center' >
                    {
                        links.map((item, ind) => (
                            <li key={ind} className={` navLinks  hover:text-webred duration-300      font-medium text-[13px] hidden lg:flex  text-darkcolor uppercase`}>
                                <Link
                                 to={item.adress} 
                                 spy={true} 
                                 smooth={true} 
                                 offset={-150}
                                 duration={1000} >
                                    {item.name}
                                </Link>
                            </li>

                        )) 
                    }
                
                </ul>
    </div>
    
  )
}

export default ResponsiveNavBar