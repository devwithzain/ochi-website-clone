"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { awwwards, ochiside } from "@/public";

export default function Hero() {
	return (
		<section
			className="w-full h-screen sm:mb-[-10px]"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div>{/* <Navbar /> */}</div>
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20rem] pl-[50rem]">
						<div>
							<h1 className="text-[177rem] leading-[130rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								we create <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "150rem" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="">
										<Image
											width={120}
											height={50}
											src={ochiside}
											alt="img"
											className="w-[150rem] h-[100rem] object-cover mt-[15rem] rounded-[10px] sm:w-[80px] sm:h-[45px]"
										/>
									</motion.span>
									<h1 className="text-[165rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
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
								className="sm:w-[26px]"
							/>
						</div>
					</div>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20rem] sm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center px-[50rem] gap-[30px] sm:flex-col sm:items-start">
							<div className="w-[50%] sm:w-full">
								<p className="text-[25rem] leading-[25rem]  font-NeueMontreal text-secondry">
									For public and private companies
								</p>
							</div>
							<div className="w-[50%] sm:w-full flex justify-between sm:flex-col sm:items-start gap-[30px]">
								<div>
									<p className="text-[25rem] leading-[25rem]  font-NeueMontreal text-secondry">
										From the first picth to IPO
									</p>
								</div>
								<div className="flex items-center gap-[10px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="text-[25rem] leading-[25rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											start the project
										</Link>
									</div>
									<div className="w-[40rem] flex items-center justify-center h-[40rem] border border-[#21212199] rounded-[50px] p-[15rem] sm:p-[30rem]  group-hover:bg-secondry transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer sm:hidden">
										<p className="text-[16px] font-normal text-secondry group-hover:text-background">
											<ArrowUpRight strokeWidth={1.25} />
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center justify-center sm:hidden">
							<p className="capitalize text-[25rem] leading-[25rem]  font-NeueMontreal text-secondry">
								scroll down
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
