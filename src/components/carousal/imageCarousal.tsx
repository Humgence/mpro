"use client";
import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./arrow";
import Autoplay from "embla-carousel-autoplay";
import PropertyCard, { PropertyCardProps } from "../card/propertyCard";
import Image from "next/image";
type PropType = {
	slides: string[];
	options?: EmblaOptionsType;
};

const ImageCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	console.log(slides);
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ playOnInit: false, delay: 3000 }),
	]);
	const [scrollProgress, setScrollProgress] = useState(0);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
		const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
		setScrollProgress(progress * 100);
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onScroll(emblaApi);
		emblaApi.on("reInit", onScroll);
		emblaApi.on("scroll", onScroll);
	}, [emblaApi, onScroll]);

	return (
		<div className="w-[100%]">
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{slides.map((config, index) => (
							<div className="embla__slide" key={index}>
								<div className="embla__slide__number">
									<div className ='h-full w-full flex justify-center item-center '>
										<Image src={config} alt={config} width={1000} height={1000} className='h-full w-full objext-contain objext-center' />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="embla__controls">
					<div className="embla__buttons">
						<PrevButton
							onClick={onPrevButtonClick}
							disabled={prevBtnDisabled}
						/>
						<p className="progress_text">2 of 5</p>
						<NextButton
							onClick={onNextButtonClick}
							disabled={nextBtnDisabled}
						/>
					</div>

					<div className="embla__progress">
						<div
							className="embla__progress__bar"
							style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageCarousel;
