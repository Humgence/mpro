"use client";

import React, { useEffect } from "react";
import propertyData from "../../propertyData";
import ImageCarousel from "@/components/carousal/imageCarousal";
import { EmblaOptionsType } from "embla-carousel";
import {
	Button,
	Heading,
	Text,
	useDisclosure,
	Drawer,
	Input,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { SectionLayout } from "@/layouts";
import { useStore } from "@/app/page";
import Navbar from "@/components/navbar/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/footer/footer";
import { Download } from "lucide-react";

const PropertySpecific = () => {
	const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
	const id = 1;
	const data = propertyData.find((property) => property.id === id);
	console.log(data?.imageUrl);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

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
	if (!data) return null;

	return (
		<div>
			<Navbar isTransparent={false} showX={false} />
			<SectionLayout>
				<div id="hero-section"></div>
				<div className="flex flex-col items-start justify-start mt-20 gap-5 max-w-xs lg:max-w-screen-2xl mx-auto ">
					<Link href="/property">
						<button className="text-[#9b1433] text-xs">Back to Results</button>
					</Link>

					<div className="flex items-center justify-start gap-3">
						<h3 className="text-xs bg-[#9b1433] px-2 py-1 font-bold text-center">
							{data.title}
						</h3>
						<h3 className="text-xs bg-[#f6f6f6] px-2 py-1 font-bold text-center">
							RETAIL
						</h3>
					</div>

					<div className="flex flex-col items-start justify-start gap-3">
						<h1 className="text-xl sm:text-4xl font-light text-[#0c3146]">
							Retail Opportunity on Kamloops North Shore
						</h1>
						<h2 className="text-lg sm:text-2xl font-light text-[#0c3146]">
							750 Fortune Drive, Kamloops, BC
						</h2>
						<div className="flex items-center justify-start gap-3">
							<h3 className="text-xs py-1 font-light text-center">FOR SALE</h3>|
							<h3 className="text-xs py-1 font-light text-center">
								$1,500,000
							</h3>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row justify-between gap-20">
						<div className="flex flex-col">
							<div className="w-full aspect-video">
								<ImageCarousel slides={data?.imageUrl} options={OPTIONS} />
							</div>
							<div className="flex flex-col items-start justify-start gap-5 w-full ">
								<h1 className="text-xl font-light text-[#0c3146]">
									Description
								</h1>
								<div className="flex flex-col items-start justify-start gap-5 w-full">
									<h1 className="text-xl font-light text-[#0c3146]">Address</h1>
									<p className="text-sm font-light text-[#0c3146]">
										750 Fortune Drive, Kamloops, BC
									</p>
								</div>

								{/* Location */}
								<div className="flex flex-col items-start justify-start gap-5 w-full">
									<h1 className="text-xl font-light text-[#0c3146]">
										Location
									</h1>
									<p className="text-sm font-light text-[#0c3146]">
										To lease a former car dealership that was converted to
										general retail space at one of Kamloops’ busiest
										intersections. The subject property is located at the
										northwest corner of 8th Avenue and Fortune Drive. This
										controlled intersection offers great exposure and reach to
										consumers on the “North Shore” and all of Kamloops as a
										whole.
									</p>
								</div>

								{/* Highlights */}
								<div className="flex flex-col items-start justify-start gap-5 w-full">
									<h1 className="text-xl font-light text-[#0c3146]">
										Highlights
									</h1>
									<ul className="list-disc text-sm font-light text-[#0c3146]">
										<li>
											Several different areas for retail and showroom space
										</li>
										<li>
											Roll-up doors for possible vehicle access or grade loading
										</li>
										<li>
											Excellent on-site parking and/or outdoor display areas
										</li>
										<li>Ample parking</li>
										<li>3-year lease available</li>
									</ul>
								</div>

								{/* Details */}
								<div className="flex flex-col items-start justify-start gap-5 w-full">
									<h1 className="text-xl font-light text-[#0c3146]">Details</h1>
									<ul className="text-sm font-light text-[#0c3146]">
										<li>
											<span className="font-light">Total Price:</span>{" "}
											$1,500,000
										</li>
										<li>
											<span className="font-light">Property Type:</span> Retail
										</li>
										<li>
											<span className="font-light">Building Type:</span> Retail
										</li>
										<li>
											<span className="font-light">Total Space:</span> 7,000 SF
										</li>
										<li>
											<span className="font-light">Opportunity:</span> For Sale
										</li>
										<li>
											<span className="font-light">Status:</span> Active
										</li>
										<li>
											<span className="font-light">Tags:</span> Retail
										</li>
									</ul>
								</div>

								{/* Google Map */}
								<div className="flex items-center justify-start gap-5 w-full">
									<Download size={24} color="#a01c43" />
									<h1 className="text-xl font-light text-[#a01c43]">
										Download Property Sheet
									</h1>
								</div>

								<div className="lg:w-[900px] h-[400px] mb-20 -z-30">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.697072608239!2d-122.9931556842582!3d49.69905327938187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d2d2b9d0e3f9%3A0x9f8c7b7d7c1b2b8d!2s750%20Fortune%20Dr%2C%20Kamloops%2C%20BC%20V2B%202L2!5e0!3m2!1sen!2sca!4v1632959762985!5m2!1sen!2sca"
										width="100%"
										height="100%"
										allowFullScreen={true}
										loading="lazy"
									></iframe>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-5 lg:max-w-md border rounded-tl-[70px] rounded-br-[70px] mb-20 bg-[#eef3f5] p-10 h-full lg:p-14">
							<h1 className="text-xl font-light text-[#0c3146]">Broker</h1>
							<div className="flex items-start justify-start gap-3">
								<img className="w-14 h-14 rounded-full" src="/a.jpg" />
								<div className="flex flex-col items-start justify-start gap-3">
									<h1 className="text-xl font-light text-[#0c3146]">
										John Doe
									</h1>
									<div className="flex flex-col items-start justify-start ">
										<p className="text-sm font-light text-[#0c3146]">
											250-372-1234
										</p>
										<p className="text-sm font-light text-[#0c3146]">
											howard.malchy@lee-associates.com
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-start justify-start gap-3">
								<img className="w-14 h-14 rounded-full" src="/a.jpg" />
								<div className="flex flex-col items-start justify-start gap-3">
									<h1 className="text-xl font-light text-[#0c3146]">
										John Doe
									</h1>
									<div className="flex flex-col items-start justify-start ">
										<p className="text-sm font-light text-[#0c3146]">
											250-372-1234
										</p>
										<p className="text-sm font-light text-[#0c3146]">
											howard.malchy@lee-associates.com
										</p>
									</div>
								</div>
							</div>
							<form className="flex flex-col lg:flex-row items-start flex-wrap justify-between gap-7 font-thin">
								<input
									type="text"
									placeholder="First Name"
									className="   w-full
              placeholder:lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
								/>
								<input
									required
									type="text"
									placeholder="Last Name"
									className="   w-full
                placeholder:lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
								/>

								<input
									type="email"
									placeholder="Email"
									className="   w-full
               placeholder:lg:text-sm lg:text-[#000000] text-xs
              text-[#000] h-14 px-2 bg-[#ffff] lg:p-4"
								/>
								<input
									type="tel"
									placeholder="Phone"
									className="   w-full
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
									By submitting this form, I agree to the Lee & Associates
									Privacy Policy. This site is protected by reCAPTCHA and the
									Google Privacy Policy and Terms of Service apply.
								</p>

								<button className="bg-[#98002f] w-full text-[#ffff] rounded-tl-3xl rounded-br-3xl p-4 hover:shadow-2xl hover:shadow-orange-900 hover: transition duration-300 ease-in-out ">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</SectionLayout>
			<Footer />
		</div>
	);
};

export default PropertySpecific;
