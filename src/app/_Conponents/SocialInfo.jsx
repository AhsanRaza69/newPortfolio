import Icons from './Icons'
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { ImLinkedin2 } from "react-icons/im";

const SocialInfo = () => {
    const iconsinfo = [
        {
            icon : <FiTwitter/>,
            link : "www.twiter.com"
        },
        {
            icon : <SlSocialFacebook/>,
            link : "www.facebook.com"
        },
        {
            icon : <ImLinkedin2/>,
            link : "www.linkedin.com"
        }
    ]
  return (
    <div className=" flex flex-col gap-3">
                <h2>FIND WITH ME</h2>
                 <div className=" flex items-center gap-3">
                   {
                    iconsinfo.map((item ,ind)=>(
                       <div key={ind} className="">
                         <Icons icon={item.icon} link={item.link}/>
                       </div>
                    ))
                   }
                 </div>
            </div>  
  )
}

export default SocialInfo