import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
	id: number;
	imageUrl: string;
	date: string;
	title: string;
	category: string;
}

const NewsCard = ({ id, imageUrl, date, title, category }: NewsCardProps) => {
	return (
		<Link href={`/news/${id}`}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0.9 },
				}}
				className="flex flex-col gap-5 max-w-[80dvw] sm:max-w-[580px]"
			>
				{/* img */}
				<div className="w-full h-[250px]">
					<Image
						src={imageUrl}
						alt="Property Image"
						height={1000}
						width={1000}
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-4">
						<div className="flex flex-wrap gap-2">
							<Tag label={category} />
						</div>
					</div>
					<div className="flex flex-col gap-5">
						{/* title */}
						<p className="text-[#013146] text-2xl font-light">{title}</p>
					</div>
				</div>
			</motion.div>
		</Link>
	);
};

export default NewsCard;

const Tag = ({ label }: { label: string }) => {
	return (
		<p className="bg-gray-100 text-slate-800 font-light uppercase py-1 px-2 text-xs tracking-wide">
			{label}
		</p>
	);
};
