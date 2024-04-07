"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { clientsItem } from "@/constants";
import { Button, Rounded } from "@/components";
import { brand01, brand02, brand03 } from "@/public";
import { motion, AnimatePresence } from "framer-motion";

export default function Clients() {
	const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full py-[150rem]">
			<h1 className="text-[65rem] px-[50rem] leading-[65rem] font-medium font-NeueMontreal text-secondry pb-[50rem]">
				Clients’ reviews
			</h1>
			{clientsItem.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10rem] flex-col ${
						item.id == 1
							? "border-y border-[#21212155]"
							: "border-b border-[#21212155]"
					}`}>
					<div className="w-full flex items-center justify-between py-[10rem] px-[50rem]">
						<div className="w-[20%]">
							<Link
								href={item.href}
								className="text-[20rem] leading-[30rem] font-normal font-NeueMontreal text-secondry link-flash">
								{item.website}
							</Link>
						</div>
						<div className="w-[30%]">
							<motion.h3
								className={`text-[20rem] font-normal font-NeueMontreal text-secondry ${
									activeAccordion === item.id ? "opacity-100" : "opacity-0"
								} opacity-0 transition-all duration-200 ease-in-out`}>
								{item.title}
							</motion.h3>
						</div>
						<div className="w-[40%]">
							<h3 className="text-[20rem] font-normal font-NeueMontreal text-secondry">
								{item.name}
							</h3>
						</div>
						<div className="w-[10%] flex items-end justify-end">
							<button
								className={`text-[20rem] leading-[30rem] font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
									activeAccordion === item.id
										? "text-gray-300"
										: "text-secondry link-flash"
								}`}
								onClick={() => toggleAccordion(item.id)}>
								{activeAccordion === item.id ? "read" : "read"}
							</button>
						</div>
					</div>

					<div className={`w-full flex justify-between px-[50rem]`}>
						<div className="w-[20%]" />
						<div className="w-[30%]">
							{item.links.map((link) => (
								<AnimatePresence key={link.id}>
									{activeAccordion === item.id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{
												ease: [0.4, 0, 0.2, 1],
												duration: 1,
											}}>
											<Button
												href={link.href}
												title={link.title}
												key={link.id}
											/>
										</motion.div>
									)}
								</AnimatePresence>
							))}
						</div>
						<div className="w-[40%]">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20rem] py-[30rem]">
											<div className="w-[130rem] h-[130rem]">
												<Image
													src={item.src}
													alt="clientImg"
													className="w-full h-full object-cover rounded-[10px]"
												/>
											</div>
											<div className="">
												<p className="text-[20rem] leading-[30rem] tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.review}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%]" />
					</div>
				</div>
			))}
			<div className="w-full flex justify-between pt-[150rem] px-[50rem] sm:flex-col gap-[20rem]">
				<div className="w-[49.5%] sm:w-full justify-between h-[60vh] sm:h-[30vh] gap-x-[10rem]">
					<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-marquee relative">
						<Image
							src={brand01}
							alt="brandImg"
							width={150}
							height={150}
						/>
						<div className="absolute bottom-[35rem] left-[35rem] flex items-center justify-center border border-about px-[12rem] py-[3rem] cursor-pointer rounded-full">
							<Link
								className="text-[19rem] text-about uppercase font-normal font-NeueMontreal tracking-wider"
								href={"/"}>
								&copy;2019 - 2024
							</Link>
						</div>
					</div>
				</div>
				<div className="w-[49.5%] sm:w-full sm:flex-col flex gap-[15rem]">
					<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[30vh]">
						<Image
							src={brand02}
							alt="brandImg"
							width={150}
							height={150}
						/>
						<div className="absolute left-[35rem] bottom-[35rem] w-fit rounded-[50px] border border-white cursor-pointer">
							<Link
								className="text-[18rem] leading-[18rem] font-NeueMontreal text-white uppercase tracking-wider"
								href="/services">
								<Rounded
									backgroundColor="#fff"
									className="">
									<p className="z-10 px-[15px] py-[10rem] hover:text-black">
										rating 5.0 on clutch
									</p>
								</Rounded>
							</Link>
						</div>
					</div>
					<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[30vh]">
						<Image
							src={brand03}
							alt="brandImg"
							width={150}
							height={150}
						/>
						<div className="absolute left-[35rem] bottom-[35rem] w-fit rounded-[50px] border border-white cursor-pointer">
							<Link
								className="text-[18rem] leading-[18rem] font-NeueMontreal text-white uppercase tracking-wider"
								href="/services">
								<Rounded
									backgroundColor="#fff"
									className="">
									<p className="z-10 px-[15px] py-[10rem] hover:text-black">
										buisness bootcamp alumini
									</p>
								</Rounded>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
