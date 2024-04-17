import { PropertCardDataType } from "@/app/page";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

type NewPropertyCardProps = {
  data: PropertCardDataType;
};
const NewPropertyCard: React.FC<NewPropertyCardProps> = ({
  data: { img, name },
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center 
      cursor-pointer rounded-br-[40px] rounded-tl-[40px]
      hover:opacity-70 transition duration-300 ease-in-out
    
    "
    >
      <div className="w-72 h-96 bg-[#f6f6f6] rounded-br-[40px] rounded-tl-[40px] ">
        <img
          src={img}
          alt="NewProperty"
          className="aspect-square h-full object-cover rounded-tl-[40px] rounded-br-[40px] "
        />
        <h3 className="text-[37px] leading-[44px] font-light text-center relative bottom-[83px] text-[#ffffff] p-4">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default NewPropertyCard;
