"use client";
import Link from "next/link";
import Image from "next/image";
import { eyes } from "@/public";
import { ArrowUpRight } from "lucide-react";
import { LinkHover, TextMask } from "@/animation";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Socials() {
	const [rotate, setRotate] = useState(0);
	const phrase = ["INSTAGRAM", "behance", "facebook", "linkedin"];
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 280);
		});
	}, []);
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);
	return (
		<section
			className="w-full min-h-screen bg-about py-[100rem] sticky -top-[85%]"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[50rem] items-center flex-col">
				<div className="flex flex-col gap-[10rem] pb-[50rem]">
					<h1 className="text-[277rem] text-center leading-[207rem] font-bold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="w-full border-t border-[#21212155] pt-[20rem]">
					<div className="w-full flex justify-between gap-[15rem] px-[50rem]">
						<div className="w-[10%]">
							<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
								Our contact
							</h3>
						</div>
						<div className="w-[48%] flex justify-between">
							<div>
								<h1 className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry pb-[20rem]">
									L:
								</h1>
								<div className="flex flex-col gap-y-[10rem]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title={`202-1965 W 4th Awe`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title={`Vancouver, Canada`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title="30 Chukarina"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title="St Lviv, Ukraine"
										href="/"
									/>
								</div>
							</div>
							<div className="flex w-fit h-fit gap-x-[10rem] group">
								<div className="rounded-[50px] border-[2px] border-[#21212155] group-hover:bg-secondry  py-[5px] px-[15rem] cursor-pointer">
									<Link
										href="mailto:hello@ochi.design"
										className="text-[20rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in">
										hello@ochi.design
									</Link>
								</div>
								<div className="w-[45rem] flex items-center justify-center h-[45rem] border-[2px] border-[#21212155] rounded-[50px] group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer">
									<p className="text-[20rem] font-normal text-secondry group-hover:text-background">
										<ArrowUpRight
											size={20}
											strokeWidth={1.25}
										/>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<motion.div
				className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
				style={{ y: mq }}>
				<div className="w-[250rem] h-[250rem] bg-white rounded-full flex items-center justify-center">
					<Image
						style={{
							transform: `rotate(${rotate}deg)`,
						}}
						src={eyes}
						alt="img"
						className="w-full h-auto object-cover"
					/>
				</div>
				<div className="w-[250rem] h-[250rem] bg-white rounded-full flex items-center justify-center">
					<Image
						style={{
							transform: `rotate(${rotate}deg)`,
						}}
						src={eyes}
						alt="img"
						className="w-full h-auto object-cover"
					/>
				</div>
			</motion.div>
		</section>
	);
}
