"use client";
import React, { useState } from "react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Nav";
import { useStore } from "../page";
import newsData from "../newsData";
import NewsCard from "@/components/card/newsCard";
import { motion } from "framer-motion";
import Image from "next/image";

const NewsPage = () => {
	const { isTransparent, setIsTransparent } = useStore();
	const initialLoad = 5;
	const loadMoreCount = 5;
	const [visibleCount, setVisibleCount] = useState(initialLoad);

	const loadMore = () => {
		setVisibleCount((prevVisibleCount) => prevVisibleCount + loadMoreCount);
	};
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
						className="absolute inset-0 object-cover h-full transition-opacity duration-500 ease-in-out filter brightness-50 contrast-100 blur-2 "
					/>
					{/* <div className="hero-overlay bg-blend-lighten bg-black opacity-70 "></div> */}
					<div className="hero-content text-5xl text-center ">News</div>
				</div>
			</motion.div>
			<div className="flex justify-center py-20">
				<div className="w-4/5">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
						{newsData.slice(0, visibleCount).map((news, key) => (
							<NewsCard key={news.id} {...news} />
						))}
					</div>
					<div className="flex justify-center mt-4">
						<button className="px-4 py-2 bg-red-500 text-white rounded-tl-lg rounded-br-lg hover:bg-red-700 transition duration-300"
							onClick={loadMore}
						>
							Show More
						</button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default NewsPage;
