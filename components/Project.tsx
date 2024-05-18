"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Rounded } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Project({ item }: { item: any }) {
	const [hovered, setHovered] = useState(false);
	return (
		<section className="w-full bg-marquee rounded-t-[20px]">
			<div className="w-full flex justify-between gap-y-[50px] padding-x pb-[50px] flex-wrap">
				<div
					className="w-[49%]"
					key={item.id}>
					<div className="flex gap-x-[10px] items-center pb-[10px]">
						<span className="w-[10px] h-[10px] rounded-full bg-white" />
						<h1 className="text-[18px] leading-[21px] uppercase font-medium font-NeueMontreal text-white">
							{item.title}
						</h1>
					</div>
					<div className="relative w-full group">
						<div
							className="rounded-[10px] overflow-hidden hover:scale-[0.95] transition cursor-pointer  transform duration-[1s] ease-[.4,0,.2,1]"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}>
							<Image
								src={item.src}
								alt={`${item.title}Img`}
								className="w-full object-cover rounded-[10px] group-hover:scale-[1.09]  transform duration-[1s] ease-[.4,0,.2,1]"
							/>
						</div>
						<div
							style={{ left: item.id % 2 == 0 ? "-15%" : "90%" }}
							className="absolute w-fit flex top-[40%] transform translate-x-[-30%] overflow-hidden z-10 group-hover:opacity-100 opacity-0 transition duration-500 ease-[.4,0,.2,1]">
							{item.title.split("").map((item: any, i: number) => (
								<motion.span
									initial={{ y: "100%" }}
									animate={hovered ? { y: 0 } : { y: "100%" }}
									transition={{
										delay: i * 0.04,
										duration: 0.5,
										ease: [0.4, 0, 0.2, 1],
									}}
									className="text-[165px] leading-none inline-block uppercase font-FoundersGrotesk text-about font-bold text-center"
									key={i}>
									{item}
								</motion.span>
							))}
						</div>
					</div>
					<div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
						{item.links.map((link: any) => (
							<div
								className="w-fit rounded-[50px] border border-[#ffffff77] cursor-pointer"
								key={link.id}>
								<Link
									className="text-[18px] leading-[18px] font-NeueMontreal text-white uppercase group-hover:text-secondry transition-all duration-300 ease-in-out hover:text-secondry"
									href={link.href}>
									<Rounded
										className="py-[10px]"
										backgroundColor="#fff">
										<p className="z-10 px-[15px]">{link.title}</p>
									</Rounded>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full flex pt-[50px] pb-[200px] justify-center">
				<div className="flex items-center justify-between bg-white cursor-pointer rounded-full group">
					<Link
						className="text-[19px] text-secondry uppercase font-normal font-NeueMontreal"
						href={"/presentation"}>
						<Rounded
							className="py-[10px]"
							backgroundColor="#212121">
							<p className="text-secondry z-10 px-[15px] ml-[30px] py-[10px] group-hover:text-white">
								view all case studies
							</p>
							<div className="bg-secondry p-[15px] rounded-full scale-[0.3] mr-[17px] group-hover:scale-[1] transition-all z-10 text-secondry group-hover:bg-white  duration-300 ease-in-out">
								<ArrowUpRight
									strokeWidth={1.5}
									size={25}
								/>
							</div>
						</Rounded>
					</Link>
				</div>
			</div>
		</section>
	);
}
