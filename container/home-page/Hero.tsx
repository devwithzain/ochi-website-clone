"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { awwwards, ochiside } from "@/public";

export default function Hero() {
	return (
		<section
			className="w-full h-[100svh] sm:mb-[-10px] xm:mb-[-10px]"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								we create <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="leading-[130px]">
										<Image
											width={120}
											height={50}
											src={ochiside}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
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
								className="xm:hidden sm:hidden"
							/>
						</div>
					</div>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									For public and private companies
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal text-secondry">
										From the first picth to IPO
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											start the project
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px]  group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center justify-center xm:hidden sm:hidden">
							<p className="capitalize paragraph font-NeueMontreal text-secondry">
								scroll down
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
