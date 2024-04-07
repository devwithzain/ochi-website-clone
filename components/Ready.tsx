"use client";
import Link from "next/link";
import Image from "next/image";
import { eyes } from "@/public";
import { Rounded } from "@/components";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
	const [rotate, setRotate] = useState(0);
	const phrase = ["Ready", "to start", "the project"];
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
			className="w-full -top-[36%] z-20 min-h-screen bg-about py-[100rem] rounded-t-[20rem] sticky"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[50rem] items-center flex-col">
				<div className="flex flex-col gap-[10rem]">
					<h1 className="text-[277rem] text-center leading-[207rem] font-bold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="flex flex-col  items-center gap-[10rem]">
					<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<Link
							className="text-[19rem] text-white uppercase font-normal font-NeueMontreal"
							href="/contact">
							<Rounded
								className="py-[10rem]"
								backgroundColor="#000">
								<p className="text-white z-10 px-[15px] ml-[20rem] py-[10rem]">
									start the project
								</p>
								<div className="bg-white p-[15px] rounded-full scale-[0.3] mr-[17rem] group-hover:scale-[1] transition-all z-10 text-black  duration-300 ease-in-out">
									<ArrowUpRight
										strokeWidth={1.5}
										size={25}
									/>
								</div>
							</Rounded>
						</Link>
					</div>
					<p className="text-[20rem] font-NeueMontreal text-secondry">OR</p>
					<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border border-[#212121]">
						<Link
							className="text-[19rem] text-white uppercase font-normal font-NeueMontreal"
							href={"/"}>
							<Rounded
								className="py-[10rem]"
								backgroundColor="#212121">
								<p className="text-black z-10 px-[15px] ml-[20rem] py-[10rem] group-hover:text-white">
									hello@ochi.design
								</p>
								<div className="bg-black group-hover:bg-white p-[15px] rounded-full scale-[0.3] mr-[17rem] group-hover:scale-[1] transition-all z-10 text-white group-hover:text-black  duration-300 ease-in-out">
									<ArrowUpRight
										strokeWidth={1.5}
										size={25}
									/>
								</div>
							</Rounded>
						</Link>
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
