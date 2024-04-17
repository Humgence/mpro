import React from "react";

export interface LandingPageProps {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
import Image from "next/image";

const LandingPage: React.FC<LandingPageProps> = ({ show, setShow }) => {
	return (
		<div
			onClick={() => setShow(!show)}
			className="relative 
        top-0
        cursor-pointer
        overflow-hidden"
		>
			<Image
				alt="YOYO"
				src="/k.jpg"
				//100% width and 100% height
				layout="fill"
				objectFit="cover"
				className="absolute inset-0 object-cover h-full
        transition-opacity duration-500 ease-in-out
         filter brightness-50 grayscale-200 contrast-100 blur-2
         grayscale
        "
			/>

			{/* Content Overlay */}
			<div className="absolute inset-0 bg-black opacity-50 h-full"></div>

			<div className="relative z-10 flex flex-col items-center justify-center h-screen text-brand-secondary">
				<h1 className="text-4xl font-bold">M PRO</h1>
				<p className="mt-4 text-lg">REALTORS</p>
			</div>
			<div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-20">
				Click to begin
			</div>
		</div>
	);
};

export default LandingPage;
