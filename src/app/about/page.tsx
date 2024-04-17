"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar/Nav";
import { PropertCardDataType, useStore } from "../page";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@chakra-ui/react";
import { SectionLayout } from "@/layouts";
import Footer from "@/components/footer/footer";
import NewPropertyCard from "@/components/card/new-property-card";

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
const AboutPage = () => {
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
						src="/f.jpg"
						layout="fill"
						objectFit="cover"
						className="absolute inset-0 object-cover h-full transition-opacity duration-500 ease-in-out "
					/>
					<div className="hero-overlay bg-blend-lighten bg-black opacity-70 "></div>
					<div className="hero-content text-5xl text-center">About Us</div>
				</div>
			</motion.div>

			<SectionLayout>
				<div className="my-10">
					<h1 className="text-[48px] font-light leading-[55px] text-[#373737] text-start mt-20 max-w-xs lg:max-w-screen-xl mx-auto">
						Our Story
					</h1>
					<div className="flex flex-col lg:flex-row text-[#373737] bg-white items-start lg:justify-between gap-20 max-w-xs lg:max-w-screen-xl my-10 mx-auto">
						<p className="text-[24px] font-light leading-[34px]">
							At M PRO Realtors, we believe in turning dreams into reality. Our
							journey began in 2023 when our founders, Inderjit Kaur and
							Jatinder Singh, envisioned a real estate agency that would
							redefine the home-buying experience. With a passion for
							exceptional service and a commitment to integrity, we’ve grown
							into a trusted name in the industry. Inderjit Kaur and Jatinder
							Singh, both seasoned real estate professionals, combined their
							expertise to create a company that prioritizes clients’ needs. Our
							story is one of dedication, perseverance, and countless happy
							homeowners. We’ve weathered market fluctuations, celebrated
							milestones, and built lasting relationships with our clients.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-10 my-20	">
						{propertyCardData.map((property, index) => (
							<NewPropertyCard key={index} data={property} />
						))}
					</div>
				</div>
			</SectionLayout>
			<Footer />
		</div>
	);
};

export default AboutPage;
