import { SectionLayout } from "@/layouts";
import {
	ChevronRight,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	Twitter,
	User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
	return (
		<>
			<UpperFooter />
			<LowerFooter />
		</>
	);
};

export default Footer;

interface RedirectLinkProps {
	label: string;
	link: string;
	icon: JSX.Element;
}
const RedirectLink = ({ label, link, icon }: RedirectLinkProps) => {
	const router = useRouter();
	return (
		<div
			className="w-full md:w-fit flex justify-center items-center gap-5 py-4 border-b-2 cursor-pointer group border-b-[#98002e] hover:text-[#98002e] duration-300"
			onClick={() => {
				router.push(link);
			}}
		>
			<div className="h-4 w-4 text-gray-400 group-hover:text-[#98002e] duration-300">
				{icon}
			</div>
			<p className="uppercase tracking-widest text-lg">{label}</p>
		</div>
	);
};

const UpperFooter = () => {
	return (
		<div className="bg-[#dfd1c9] text-[#000] rounded-tl-[5rem] p-14 sm:p-24">
			<SectionLayout>
				<div className="flex flex-col gap-14">
					<div className="flex flex-col gap-7">
						{/* heading */}
						<div className="flex flex-col gap-8 items-center">
							<h2 className="text-6xl">Need Help?</h2>
							<p className="text-center text-2xl font-light tracking-wide">
								We’re here for you. Connect with one of our local market experts
								or contact our office to get started.
							</p>
						</div>
						{/* redirection links */}
						<div className="flex w-full justify-center">
							<div className="flex w-full flex-col md:flex-row md:justify-center md:gap-20">
								{[
									{ label: "OUR BROKERS", link: "", icon: <User /> },
									{ label: "CONTACT US", link: "", icon: <Mail /> },
								].map(({ label, link, icon }, index) => {
									return (
										<RedirectLink
											key={index}
											label={label}
											link={link}
											icon={icon}
										/>
									);
								})}
							</div>
						</div>
					</div>
					{/* Specs */}
					<div className="py-2 grid grid-cols-1 lg:grid-cols-3 gap-14">
						{specConfig.map((spec, key) => (
							<SpecCard key={key} {...spec} />
						))}
					</div>
				</div>
			</SectionLayout>
		</div>
	);
};

interface SpecCardProps {
	label: string;
	image: string;
	link: string;
}

const specConfig: SpecCardProps[] = [
	{
		label: "Properties",
		image: "https://leevancouver.com/wp-content/uploads/propertiesb.jpg",
		link: "#",
	},
	{
		label: "Services",
		image: "https://leevancouver.com/wp-content/uploads/services.jpg",
		link: "#",
	},
	{
		label: "Reports",
		image: "https://leevancouver.com/wp-content/uploads/reports2.jpg",
		link: "#",
	},
];

const SpecCard = ({ image, label, link }: SpecCardProps) => {
	return (
		<div className="h-[503px] w-full overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] relative">
			<Image
				src={image}
				alt={label}
				height={1000}
				width={1000}
				className="h-full w-full object-cover object-center"
			/>
			<div className="absolute flex flex-col justify-end cursor-pointer duration-300 z-10 inset-0 bg-gradient-to-b from-transparent via-transparent to-[#013146]/80 bg-opacity-10 hover:bg-[#013146]/30 ">
				<p className="z-20 text-[#000] pl-8 pb-10 text-4xl font-light">
					{label}
				</p>
			</div>
		</div>
	);
};

const LowerFooter = () => {
	return (
		<>
			<LowerTopFooter />
			<LowerBottomFooter />
		</>
	);
};

const LowerTopFooter = () => {
	const COMPANY_LOGO =
		"data:image/png;base64,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";
	const FIFTY_YEARS_LOGO =
		"data:image/jpeg;base64,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";
	return (
		<div className="bg-[#b89983] text-[#000] p-14 sm:px-24">
			<SectionLayout>
				<div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-14 lg:justify-between">
					{/* logos */}
					<div className="flex flex-col gap-4 items-start">
						<div className="h-20 w-full">
							<Image
								src={"/logo.png"}
								height={300}
								width={300}
								alt="logo"
								className="h-full w-full object-contain"
							/>
						</div>
						<div className="h-14 w-fit">
							<Image
								src={FIFTY_YEARS_LOGO}
								height={300}
								width={300}
								alt="logo"
								className="h-full w-full object-contain"
							/>
						</div>
					</div>
					{/* contact */}
					<div className="flex flex-col gap-5 min-w-[228px]">
						<div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
							<p className="text-3xl font-light">Contact</p>
							<div className="flex flex-col gap-3 text-xs text-[#000]">
								<p>M pro Realtors</p>
								<p>1st Floor, SCO 25, Sector 79,</p>
								<p>Sahibzada Ajit Singh Nagar, Punjab 140308</p>
								<p>T: +91-89027-89027</p>
							
							</div>
						</div>
						<div className="flex gap-5 items-center">
							{[
								<Linkedin key={"linkedin"} />,
								<Instagram key={"instagram"} />,
								<Facebook key={"facebook"} />,
								<Twitter key={"twitter"} />,
							].map((icon) => {
								return icon;
							})}
						</div>
					</div>
					{/* join our community */}
					<div className="bg-[#dfd1c9] rounded-tl-[2rem] rounded-br-[2rem] p-8 flex flex-col gap-5">
						<div className="flex flex-col gap-3">
							<h4 className="text-3xl">Join Our Community</h4>
							<p className="text-xs">
								Sign up for exclusive property and market information from M pro
								Realtors
							</p>
						</div>
						<div className="flex items-center">
							<input
								type="email"
								placeholder="Enter Email"
								className="w-full py-2 px-1 bg-transparent border-b-2 outline-none border-b-[#000] placeholder:text-[#000] placeholder:uppercase placeholder:text-xs"
							/>
							<span className="text-[#000] cursor-pointer">
								<ChevronRight />
							</span>
						</div>
					</div>
				</div>
			</SectionLayout>
		</div>
	);
};
const LowerBottomFooter = () => {
	return (
		<div className="bg-[#F5F5DC] py-5 px-14 sm:px-24">
			<SectionLayout>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 uppercase text-[#000] text-[10px]">
					<p className="lg:text-start">
						©2024 M pro Realtors COMMERCIAL REAL ESTATE (BC) LTD.
					</p>
					<p className="lg:text-center">PRIVACY POLICY</p>
					<p className="lg:text-end">TERMS & CONDITIONS</p>
				</div>
			</SectionLayout>
		</div>
	);
};
