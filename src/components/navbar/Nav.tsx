import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
interface DropdownProps {
	links: { label: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ links }) => {
	return (
		<div className="absolute top-full left-0 mt-2 w-[150px] rounded-tl-[20px] rounded-br-[20px] h-[200px] bg-[#0c3146] mx-auto border text-[#ffffff] border-[#0c3146]">
			<div className="border-gray-200 rounded-lg ">
				<ul className="menu">
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const Navbar: React.FC<{ isTransparent: boolean; showX?: boolean }> = ({
	isTransparent,
	showX,
}) => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
	const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

	const controlNavbar = () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY === 0) {
			setShow(false);
			showX = true;
		} else if (currentScrollY < lastScrollY) {
			setShow(false);
			showX = false;
		} else {
			setShow(true);
			showX = false;
		}
		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);
			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);

	const aboutLinks = [
		{ label: "Some Link", href: "/about/team" },
		{ label: "Our Vision", href: "/about/vision" },
	];

	const contactLinks = [
		{ label: "Contact Info", href: "/contact/info" },
		{ label: "Contact Form", href: "/contact/form" },
	];

	const handleAboutDropdownToggle = () => {
		console.log("hovered");
		setIsAboutDropdownOpen(!isAboutDropdownOpen);
	};

	const handleContactDropdownToggle = () => {
		setIsContactDropdownOpen(!isContactDropdownOpen);
	};

	return (
		<div
			className={`navbar align-middle text-brand-secondary fixed z-10 top-0  active ${
				show || (showX && "hidden")
			} 
    ${!isTransparent && "border-b-[1px] border-[#000]"}
    z-10
     ${isTransparent ? "text-[#ffff]" : "text-[#000]"} 
    ${
			isTransparent ? "bg-transparent" : "bg-[#ffffff]"
		} transition-colors duration-500 ease-in-out`}
		>
			<div className="flex flex-row items-center justify-between gap-20 lg:max-w-screen-2xl lg:mx-auto ">
				<div>
					<div className="hidden lg:flex">
						<ul
							className={`menu cursor-pointer flex items-start gap-10 menu-horizontal px-1  ${
								isTransparent ? "text-[#ffff]" : "text-[#000]"
							} `}
						>
							<div className="relative cursor-pointer">
								{/* <li className="relative">Our Projects</li> */}

								<Link className="relative" href="/our-staff">
									Our Team
								</Link>
								{/* {isAboutDropdownOpen && <Dropdown links={aboutLinks} />} */}
							</div>
							<div className="relative cursor-pointer">
								{/* <li className="relative">Our Projects</li> */}

								<Link className="relative" href="/property">
									Property
								</Link>
								{/* {isAboutDropdownOpen && <Dropdown links={aboutLinks} />} */}
							</div>

							<div className="relative cursor-pointer">
								{/* <li className="relative"> */}
								<Link className="relative" href="/about">
									About Us
								</Link>
								{/* </li> */}
								{isAboutDropdownOpen && <Dropdown links={aboutLinks} />}
							</div>
							{/* <div className="relative cursor-pointer">
								<li className="relative">Our Vision</li>
								{isContactDropdownOpen && <Dropdown links={aboutLinks} />}
							</div> */}
						</ul>
					</div>
					<div
						className={`drawer drawer-start  ${
							isTransparent ? "text-[#ffff]" : "text-[#000]"
						} `}
					>
						<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
						<div className="drawer-content">
							<label htmlFor="my-drawer-4" className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
						</div>
						<div className="drawer-side">
							<label
								htmlFor="my-drawer-4"
								aria-label="close sidebar"
								className="drawer-overlay"
							></label>

							<div className="flex flex-col w-full items-start justify-start h-full bg-neutral">
								<div className="flex flex-col mt-4 w-full items-start justify-center">
									<div
										className={`flex flex-row items-start w-11/12 justify-between  ${
											isTransparent ? "text-[#ffff]" : "text-[#000]"
										} `}
									>
										<Link
											href="/"
											className="text-2xl font-bold text-center ml-4"
										>
											<div className="h-20">
												<Image
													src="/logo.png"
													width={100}
													height={100}
													className="h-full w-full object-contain "
													alt={"dds"}
												/>
											</div>
										</Link>

										<label
											htmlFor="my-drawer-4"
											aria-label="close sidebar"
											className="drawer-overlay"
										>
											<X size={24} />
										</label>
									</div>
									<ul className="menu mt-8 gap-5 text-[#ffffff]">
										<li>
											<Link href="/our-staff">Our Team</Link>
										</li>
										<li>
											<Link href="/news">News</Link>
										</li>
										<li>
											<Link href="/project">Property</Link>
										</li>
										<li>
											<Link href="/about">About Us</Link>
										</li>
										<li>
											<Link href="/contact">Contact</Link>
										</li>
										<li>
											<Link href="/vision">vision</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`navbar-center lg:flex  ${
						isTransparent ? "text-[#ffff]" : "text-[#000]"
					} `}
				>
					<Link href="/" className="text-2xl font-bold text-center ml-4">
						<div className="h-10">
							<Image
								src="/logo.png"
								width={100}
								height={100}
								className="h-full w-full object-contain "
								alt={"dds"}
							/>
						</div>
					</Link>
				</div>
				<div className="hidden lg:flex">
					<ul
						className={`menu cursor-pointer flex items-start gap-10 menu-horizontal px-1  ${
							isTransparent ? "text-[#ffff]" : "text-[#000]"
						} `}
					>
						<div className="relative cursor-pointer">
							{/* <li
								// onMouseEnter={handleAboutDropdownToggle}
								// onMouseLeave={handleAboutDropdownToggle}
							> */}
							<Link href="/vision"> Our Vision</Link>
							{/* </li> */}
							{isAboutDropdownOpen && <Dropdown links={aboutLinks} />}
						</div>
						<div className="relative cursor-pointer">
							{/* <li
								// onMouseEnter={handleAboutDropdownToggle}
								// onMouseLeave={handleAboutDropdownToggle}
							> */}
							<Link href="/news"> News</Link>
							{/* </li> */}
							{isAboutDropdownOpen && <Dropdown links={aboutLinks} />}
						</div>

						<div className="relative cursor-pointer">
							<Link
								className="relative"
								// onMouseEnter={handleContactDropdownToggle}
								// onMouseLeave={handleContactDropdownToggle}
								href="/contact"
							>
								Contact
							</Link>

							{isContactDropdownOpen && <Dropdown links={aboutLinks} />}
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
