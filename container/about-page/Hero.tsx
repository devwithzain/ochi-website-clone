"use client";
import Link from "next/link";
import Image from "next/image";
import { ochiside } from "@/public";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full mt-[170rem] mb-[130rem] px-[50rem]">
						<div>
							<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								WE ARE <br />
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
										OCHI DESIGN
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20rem]">
						<div className="w-full flex justify-between gap-[15rem] px-[50rem]">
							<div className="w-[10%]">
								<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
									About us:
								</h3>
							</div>
							<div className="w-[48%] flex justify-between">
								<div className="w-[50%] flex flex-col gap-y-[40rem]">
									<div className="flex flex-col gap-y-[20rem]">
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
											In Ukrainian, ochi - means eyes. It&apos;s not <br /> just
											a beautiful word, but our philosophy. <br />
											Almost everything that needs to be <br /> communicated is
											better shown than <br /> explained.
										</p>
									</div>
									<div className="flex flex-col gap-y-[20rem]">
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
											We believe a great presentation evokes <br />
											interest and drives business results far
											<br /> better than any saying can. Hence, we <br />
											founded ochi to help you persuade
											<br /> colleagues and clients by creating eye-
											<br />
											opening presentations.
										</p>
									</div>
								</div>
								<div className="flex w-fit h-fit gap-x-[10rem] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[5px] px-[15rem] cursor-pointer">
										<Link
											href="/case/workiz/"
											className="text-[20rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in">
											Our Work
										</Link>
									</div>
									<div className="w-[40rem] flex items-center justify-center h-[40rem] border border-[#21212199] rounded-[50px] p-[15rem]  group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer">
										<p className="text-[20rem] font-normal text-secondry group-hover:text-background">
											<ArrowUpRight strokeWidth={1.25} />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Eyes />
			<div className="w-[83%] pl-[50rem]">
				<h1 className="text-[65rem] leading-[65rem] font-medium font-NeueMontreal text-secondry">
					We save businesses from ugly and <br /> ineffective presentations.
				</h1>
			</div>
		</section>
	);
}
