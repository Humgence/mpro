"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LandingPage from "@/components/home/landing";
import Navbar from "@/components/navbar/Nav";
import Filter from "@/components/filter/filter";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousal/carousal";
import { create } from "zustand";
import propertyData from "./propertyData";
import "./carousalcss/base.css";
import "./carousalcss/embla.css";
import Footer from "@/components/footer/footer";
import { SectionLayout } from "@/layouts";
import NewPropertyCard from "@/components/card/new-property-card";
import { ChevronDown } from "lucide-react";
import NewFilter from "@/components/new-filter/filter";
import { Collapse } from "@chakra-ui/react";

type Store = {
  isTransparent: boolean;
  setIsTransparent: (isTransparent: boolean) => void;
};

export type PropertCardDataType = {
  img: string;
  name: string;
};

export const propertyCardData: PropertCardDataType[] = [
  {
    img: "/x.jpg",
    name: "Industrial",
  },
  {
    img: "/k.jpg",
    name: "Retail",
  },
  {
    img: "/f.jpg",
    name: "Office",
  },
  {
    img: "/c.jpg",
    name: "Development",
  },
];

export const useStore = create<Store>((set) => ({
  isTransparent: true,
  setIsTransparent: (isTransparent) => set({ isTransparent }),
}));
export default function Home() {
  const [show, setShow] = useState<boolean>(true);

  const { isTransparent, setIsTransparent } = useStore();

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const [showMore, setShowMore] = useState<boolean>(false);

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
    <div>
      {show ? (
        <LandingPage show={show} setShow={setShow} />
      ) : (
        <div>
          <Navbar isTransparent={isTransparent} />
          {/* Hero section */}
          <motion.div
            className="relative  w-full flex justify-start md:justify-center items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div
              id="hero-section"
              className="relative hero min-h-screen w-full"
            >
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 object-cover w-full h-full grayscale"
              >
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="hero-overlay bg-black opacity-50"></div>
              <div className="hero-content text-center"></div>
            </div>
          </motion.div>
          <NewFilter />

          <div className="w-full p-10 sm:px-24">
            <SectionLayout>
              <div className="flex flex-col gap-20 my-10">
                <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center ">
                  <h2 className="text-[#0c3146] text-[2.8rem] font-light">
                    Featured Properties
                  </h2>
                  <div className="w-fit flex justify-center items-center gap-5 py-4 border-b-2 cursor-pointer group border-b-[#98002e] text-[#98002e] duration-300">
                    <p className="uppercase tracking-widest text-lg">
                      View all Properties
                    </p>
                  </div>
                </div>
                <EmblaCarousel
                  slides={propertyData.slice(0, 10)}
                  options={OPTIONS}
                />
              </div>

              {/* MORE INSIGHTS */}
              <div className="flex flex-col gap-20 items-center justify-between lg:m-10 my-20">
                <div className="flex flex-col gap-5 items-start justify-start lg:flex-row lg:justify-between lg:gap-10 lg:items-center">
                  <div className=" lg:w-[45%]  flex flex-col items-start justify-start gap-5">
                    <h2 className="text-[#013146] leading-[47px] text-[48px] font-light">
                      Market Insights
                    </h2>
                    <p className=" text-[24px]  text-[#0c3146] font-light leading-[34px] ">
                      Lee & Associates Vancouver is a leader in industrial and
                      commercial research and information in the Metro Vancouver
                      area. Our local and national research teams provide timely
                      quarterly market intelligence and statistics that help
                      businesses make informed, up-to-date real estate
                      decisions.
                    </p>
                  </div>
                  <div className="lg:w-[40%] flex flex-col items-start justify-center gap-3">
                    <div className="bg-gray-200 flex flex-col  gap-5  border px-[34px] py-[24px] rounded-tl-[40px]">
                      <h2 className="text-[#013146] leading-[28px] text-[24px] font-light">
                        Q4 2023 North America Market Reports Released
                      </h2>
                      <p className="text-sm ">Market Insight</p>
                    </div>
                    <div className="bg-gray-200 flex flex-col  gap-5  border px-[34px] py-[24px] ">
                      <h2 className="text-[#013146] leading-[28px] text-[24px] font-light">
                        Q3 2023 North America Market Reports Released
                      </h2>
                      <p className="text-sm ">Market Insight</p>
                    </div>
                    <div className="bg-gray-200 flex flex-col  gap-5  border px-[34px] py-[24px] ">
                      <h2 className="text-[#013146] leading-[28px]  text-[24px] font-light">
                        Q3 2023 Industrial Report: Metro Vancouver Desperately
                        Needs More Supply of Developable Land
                      </h2>
                      <p className="text-sm ">Market Insight</p>
                    </div>
                    <div className="bg-gray-200 flex flex-col  gap-5  border px-[34px] py-[24px] ">
                      <h2 className="text-[#013146] leading-[28px] text-[24px] font-light">
                        Q2 2023 North America Market Reports Released
                      </h2>
                      <p className="text-sm ">Market Insight</p>
                    </div>

                    <div className="bg-gray-200 flex flex-col  gap-5  border px-[34px] py-[24px] rounded-br-[40px]">
                      <h2 className="text-[#013146] leading-[28px] text-[24px] font-light">
                        Q4 2023 North America Market Reports Released
                      </h2>
                      <p className="text-sm ">Market Insight</p>
                    </div>

                    <button className="bg-[#98002f]  text-[#ffff] rounded-tl-3xl rounded-br-3xl p-4 hover:shadow-2xl hover:shadow-orange-900 hover: transition duration-300 ease-in-out ">
                      VIEW ALL MAKET INSIGHTS
                    </button>
                  </div>
                </div>
              </div>

              {/* Find A Property */}
              <div className="flex flex-col gap-20 items-start justify-center lg:m-10">
                <div className="flex flex-col gap-20">
                  <h2 className="text-[#013146] leading-[47px] text-start text-[48px] font-light">
                    Find A Property
                  </h2>
                  <div className="grid grid-col-1 lg:grid-cols-4 gap-10">
                    {propertyCardData.map((data, index) => (
                      <NewPropertyCard key={index} data={data} />
                    ))}
                  </div>
                  <div
                    className="flex flex-row items-center justify-center gap-5 cursor-pointer"
                    onClick={() => setShowMore(!showMore)}
                  >
                    <h2 className="text-[#9b0836] leading-[21px] text-[20px] font-light">
                      All Categories
                    </h2>
                    <ChevronDown size={24} color="#9b0836" />
                  </div>
                </div>
                <Collapse in={showMore}>
                  <div className="grid grid-col-1 lg:grid-cols-4 gap-10">
                    {propertyCardData.map((data, index) => (
                      <NewPropertyCard key={index} data={data} />
                    ))}
                  </div>
                </Collapse>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 items-center justify-between lg:my-96 my-96">
                <div className=" lg:w-[45%] bg-gray-400 flex flex-col items-end justify-start gap-5">
                  <img
                    src="/x.jpg"
                    alt="map"
                    className="
                      relative bottom-[9rem] right-0
                    w-[87%] h-[60vh] z-20  object-cover rounded-bl-[130px] rounded-tr-[130px] "
                  />
                </div>
                <div className="lg:w-[40%] flex flex-col items-start justify-start gap-5">
                  <h2 className="text-[#013146] w-[70%] leading-[47px] text-[48px] font-light">
                    Let Our Experts Assist You
                  </h2>
                  <p className=" text-[24px]  text-[#0c3146] font-light leading-[34px] ">
                    Our experienced brokers have the knowledge and resources to
                    meet your unique real estate goals, whether you are a
                    landlord or tenant, buyer or seller. They provide
                    best-in-class services and develop relationships with
                    clients to achieve long term success. If you are ready to
                    get started on your next transaction or just need
                    information to help plan your next move, connect with one of
                    our professionals for up-to-date market insight.
                  </p>
                  <button className="bg-[#98002f]  text-[#ffff] rounded-tl-3xl rounded-br-3xl p-4 hover:shadow-2xl hover:shadow-orange-900 hover: transition duration-300 ease-in-out ">
                    VIEW ALL MAKET INSIGHTS
                  </button>
                </div>
              </div>
            </SectionLayout>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
