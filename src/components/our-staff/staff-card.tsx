import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

type StaffCardProps = {
  name: string;
  img: string;
  role: string;
  phone: string;
};
const StaffCard: React.FC<StaffCardProps> = ({ name, role, phone, img }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-72 bg-[#f6f6f6] rounded-br-[40px] rounded-tl-[40px]">
        <img
          src={img}
          alt="staff"
          className="aspect-square object-cover rounded-tl-[40px] "
        />
        <div className="flex flex-col items-start justify-between gap-20 p-4 text-[#000]">
          <div>
            <h1 className="text-2xl font-light">{name}</h1>
            <p className="text-xs">{role}</p>
          </div>
          <div className="flex items-center justify-between gap-20">
            <p className="text-sm">{phone}</p>
            <Mail size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
