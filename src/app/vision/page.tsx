"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar/Nav";
import { useStore } from "../page";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@chakra-ui/react";
import { SectionLayout } from "@/layouts";
import Footer from "@/components/footer/footer";

const VisionPage = () => {
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
						src="/v.jpg"
						layout="fill"
						objectFit="cover"
						className="absolute inset-0 object-cover h-full transition-opacity duration-500 ease-in-out "
					/>
					<div className="hero-overlay bg-blend-lighten bg-black opacity-70 "></div>
					<div className="hero-content text-5xl text-center">Our Vision</div>
				</div>
			</motion.div>

			<SectionLayout>
				<div className="my-10">
					<h1 className="text-5xl font-light leading-[55px] text-[#373737] text-start mt-20 max-w-xs lg:max-w-screen-xl mx-auto">
						What Sets Us Apart
					</h1>
					<div className="flex flex-col lg:flex-row text-[#373737] bg-white items-start lg:justify-between gap-20 max-w-xs lg:max-w-screen-xl mt-20 mx-auto">
						<div className="flex flex-col items-start justify-start gap-10  lg:w-[50%]">
							<p className="text-[18px] font-light leading-[27px]">
								At M PRO Realtors, we believe in turning dreams into reality.
								Our journey began in 2023 when our founders, Inderjit Kaur and
								Jatinder Singh, envisioned a real estate agency that would
								redefine the home-buying experience. With a passion for
								exceptional service and a commitment to integrity, we’ve grown
								into a trusted name in the industry.
							</p>
							<p>Personalized Approach: We don’t believe in one-size-fits-all solutions. Each client is unique, and we tailor our services accordingly. Whether you’re a first-time buyer or a seasoned investor, we’re here to guide you.</p>
              <p>Transparency: Honesty is our policy. We provide clear communication, transparent pricing, and thorough market insights. No surprises—just informed decisions.</p>
              <p>Local Expertise: Our team knows the Tricity like the back of our hands. From trendy neighborhoods to hidden gems, we’ll help you find the perfect property.
</p>
              <p>Community Involvement: We’re not just realtors; we’re community builders. We actively participate in local events, support charities, and contribute to the growth of our city.</p>
						</div>

						<div className="flex flex-col items-start justify-start gap-10 lg:w-1/2   mb-20  p-10 lg:p-14">
							<img
								src="https://leevancouver.com/wp-content/uploads/lee-office-map-10.2023-700x555.png"
								alt="YOYO"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</SectionLayout>
			<Footer />
		</div>
	);
};

export default VisionPage;
