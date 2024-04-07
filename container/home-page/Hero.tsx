"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { awwwards, ochiside } from "@/public";

export default function Hero() {
	return (
		<section
			className="w-full h-screen"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div>{/* <Navbar /> */}</div>
				<div className="w-full flex flex-col justify-between h-[70vh]">
					<div className="w-full flex justify-between gap-[20rem] pl-[50rem]">
						<div>
							<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								we create <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "150rem" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 0.7,
										}}
										className="block sm:hidden">
										<Image
											width={120}
											height={50}
											src={ochiside}
											alt="img"
											className="w-[150rem] h-[100rem] object-cover mt-[15px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										eye-opening
									</h1>
								</div>
								presentation
							</h1>
						</div>
						<div>
							<Image
								src={awwwards}
								alt="awwwards"
								width={60}
								height={60}
							/>
						</div>
					</div>
					<div className="w-full h-[22vh] flex border-t border-[#21212155] py-[20rem] pr-[50rem] flex-col gap-y-[50rem]">
						<div className="flex justify-between items-center px-[50rem] sm:flex-col sm:items-start sm:gap-[20px]">
							<div>
								<p className="text-[20rem]  font-NeueMontreal text-secondry">
									For public and private companies
								</p>
							</div>
							<div>
								<p className="text-[20rem]  font-NeueMontreal text-secondry">
									From the first picth to IPO
								</p>
							</div>
							<div className="flex items-center gap-x-[10rem] group">
								<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[5px] px-[15rem] cursor-pointer">
									<Link
										className="text-[20rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
										href="/contact">
										start the project
									</Link>
								</div>
								<div className="w-[40rem] flex items-center justify-center h-[40rem] border border-[#21212199] rounded-[50px] p-[15rem] sm:p-[30rem]  group-hover:bg-secondry transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer">
									<p className="text-[20rem] font-normal text-secondry group-hover:text-background">
										<ArrowUpRight strokeWidth={1.25} />
									</p>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center justify-center">
							<p className="capitalize text-[20rem]  font-NeueMontreal text-secondry">
								scroll down
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
