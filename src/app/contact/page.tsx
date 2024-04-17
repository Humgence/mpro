"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar/Nav";
import { useStore } from "../page";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@chakra-ui/react";
import { SectionLayout } from "@/layouts";
import Footer from "@/components/footer/footer";
const ContactPage = () => {
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
  }, [
    setIsTransparent,
    // isTransparent,
  ]);

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
            className="absolute inset-0 object-cover h-full transition-opacity duration-500 ease-in-out filter brightness-50 grayscale-200 contrast-100 blur-2 grayscale"
          />
          {/* <div className="hero-overlay bg-blend-lighten bg-black opacity-70 "></div> */}
          <div className="hero-content text-5xl text-center">Contact US</div>
          <div className="absolute bottom-14 left-[52%] transform -translate-x-1/2 text-white">
            Scroll to begin
          </div>
        </div>
      </motion.div>

      <SectionLayout>
        <div className="flex flex-col lg:flex-row text-[#373737] bg-white items-start justify-between gap-10 max-w-xs lg:max-w-screen-xl mt-20 mx-auto">
          <div className="flex flex-col items-start justify-start gap-10  lg:w-1/2">
            <h1 className="text-5xl font-light text-[#373737]">Get In Touch</h1>
            <p className="text-[24px] font-[400] leading-[34px]">
              Have a question? Wed love to hear from you. Send us a message
              using this form and we will be in touch as soon as possible. Your
              contact information will not be shared outside of M pro Realtors.
            </p>
            <p className="text-3xl font-thin">
              Feel free to call our office at (604) 684-7117 if you wish to
              speak with someone sooner.
            </p>
          </div>

          <div className="flex flex-col items-start justify-start gap-10 lg:w-1/2 border rounded-tl-[70px] rounded-br-[70px] mb-20 bg-[#eef3f5] p-10 lg:p-14">
            <form className="flex flex-col lg:flex-row items-start flex-wrap justify-between gap-7 font-thin">
              <input
                type="text"
                placeholder="First Name"
                className=" lg:w-[47%]  w-full
              placeholder:lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className=" lg:w-[47%]  w-full
                placeholder:lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
              />

              <input
                type="email"
                placeholder="Email"
                className=" lg:w-[47%]  w-full
               placeholder:lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
              />
              <input
                type="tel"
                placeholder="Phone"
                className=" lg:w-[47%]  w-full
                placeholder:lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
              />

              <input
                type="text"
                placeholder="Company"
                className="  w-full
                placeholder: lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
              />

              {/* big text area with full width */}
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                className="   placeholder: lg:text-sm lg:text-[#000000] text-xs text-[#000] w-full bg-[#ffff] p-4"
              ></textarea>
              <p className="text-[#000] text-xs">
                By submitting this form, I agree to theM pro Realtors Privacy
                Policy. This site is protected by reCAPTCHA and the Google
                Privacy Policy and Terms of Service apply.
              </p>

              <button className="bg-[#98002f] w-full text-[#ffff] rounded-tl-3xl rounded-br-3xl p-4 hover:shadow-2xl hover:shadow-orange-900 hover: transition duration-300 ease-in-out ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </SectionLayout>
      <Footer />
    </div>
  );
};

export default ContactPage;
