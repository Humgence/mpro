"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar/Nav";
import { useStore } from "../page";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@chakra-ui/react";
import { SectionLayout } from "@/layouts";
import SatffCard from "@/components/our-staff/staff-card";
import Footer from "@/components/footer/footer";

const staffData = [
  {
    img: "/a.jpg",
    name: "John Doe",
    role: "Director of Marketing, Graphic Designer",
    phone: "678-999-8212",
  },
  {
    img: "/s.jpg",
    name: "Nahid Backen",
    role: "Receptionist/Office Administration",
    phone: "678-999-8212",
  },
  {
    img: "/d.jpg",
    name: "Mary Mendoza",
    role: "Director of Research",
    phone: "678-999-8212",
  },
  {
    img: "/a.jpg",
    name: "Macyn Scholz",
    role: "Research Coordinator",
    phone: "678-999-8212",
  },
  {
    img: "/s.jpg",
    name: "Mason Taykandy",
    role: "Accountant",
    phone: "678-999-8212",
  },
];

const OurStaffPage = () => {
  const { isTransparent, setIsTransparent } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.getElementById("hero-section")!.offsetHeight!;
      const navbar = document.querySelector(".navbar");
      if (navbar === null) return;
      if (window.scrollY > heroSectionHeight) {
        setIsTransparent(false);
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-[#ffffff]");
        navbar.classList.add("text-white");
      } else {
        setIsTransparent(true);
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-[#ffffff]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <Navbar isTransparent={isTransparent} />

      <motion.div>
        <div
          id="hero-section"
          className="relative hero h-[55vh] w-full text-[#ffff]"
        >
          <Image
            alt="YOYO"
            src="/t.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover h-full transition-opacity duration-500 ease-in-out "
          />
          <div
            className="hero-overlay bg-blend-lighten bg-[
            #000
          
            
          ] opacity-70 "
          ></div>
          <div className="hero-content text-5xl text-center">Our Staff</div>
        </div>
      </motion.div>

      <SectionLayout>
        <div className="grid grid-col-1 lg:grid-cols-4 gap-5  relative bottom-36">
          {staffData.map((staff, index) => (
            <SatffCard
              key={index}
              name={staff.name}
              role={staff.role}
              phone={staff.phone}
              img={staff.img}
            />
          ))}
        </div>
      </SectionLayout>
      <Footer />
    </div>
  );
};

export default OurStaffPage;
