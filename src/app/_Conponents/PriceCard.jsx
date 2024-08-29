import { IoCheckmark } from "react-icons/io5";
import ReUseHeading from "./reUseComponents/ReUseHeading";
import ReUseButton from "./reUseComponents/ReUseButton";

const PriceCard = ({title,Stiitle,price}) => {
  return (
    <div className=' text-white  w-full px-9 py-8 shadow-zinc-900 shadow-md flex-col gap-y-3 rounded-xl flex'>
        <h2 className=" font-medium">
            {title}
        </h2>
        <span className=" font-medium ">
          {Stiitle}
        </span>
        <p className=" font-semibold text-[36px] ">
          ${price}
        </p>
        <div className=" flex-col mb-3 flex gap-y-4">
          <span className=" gap-3  flex items-center">
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
          1 Page with Elementor
          </span>
          <span className=" gap-3  flex items-center">
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Design Customization
          </span>
          <span className=" gap-3 opacity-50 flex items-center">
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Responsive Design
          </span>
          <span className=" gap-3 opacity-50   flex items-center">
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Content Upload
          </span>
          <span className=" gap-3  opacity-50  flex items-center">
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Design Customization
          </span>
        </div>
        <div className=" w-full">
          <ReUseButton title={"BUY NOW"} w=" w-full" />
        </div>
    </div>
  )
}

export default PriceCard