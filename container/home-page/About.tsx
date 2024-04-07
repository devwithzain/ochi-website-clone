"use client";
import Link from "next/link";
import Image from "next/image";
import { aboutImg } from "@/public";
import { ArrowUpRight } from "lucide-react";
import { footerItems } from "@/constants";
import { Rounded } from "@/components";
import { useState } from "react";
import { LinkHover } from "@/animation";

export default function About() {
	const [hovered, setHovered] = useState(false);
	return (
		<>
			<section className="w-full bg-about py-[80rem] rounded-t-[20px] z-20 relative">
				<div className="pl-[50rem]">
					<h1 className="text-[65rem] leading-[68rem] font-medium font-NeueMontreal text-secondry">
						Ochi is a strategic partner for fast-grow­ing tech <br /> businesses
						that need to&nbsp;
						<span className="text-[65rem] leading-[65rem] font-medium font-NeueMontreal relative ease-[0.19, 1, 0.22, 1] before:absolute before:content-[''] before:left-0 text-secondry  before:block before:w-full  before:bg-secondry before:transition before:duration-[0.6s] after:absolute after:content-[''] after:left-0  after:block after:w-full  after:bg-secondry after:transition after:duration-[0.6s] before:scale-x-0 before:origin-left after:origin-right after:delay-[0.25s] hover:before:scale-x-100 hover:before:delay-[0.25s] hover:after:scale-x-0 hover:after:delay-0 before:h-[4px] h-[4px] after:h-[4px] before:bottom-[-1.5rem] after:bottom-[-1.5rem] cursor-pointer">
							raise funds,
						</span>
						&nbsp;sell prod­ucts, <br />
						<span className="text-[65rem] leading-[65rem] font-medium font-NeueMontreal relative ease-[0.19, 1, 0.22, 1] before:absolute before:content-[''] before:left-0 text-secondry  before:block before:w-full  before:bg-secondry before:transition before:duration-[0.6s] after:absolute after:content-[''] after:left-0  after:block after:w-full  after:bg-secondry after:transition after:duration-[0.6s] before:scale-x-0 before:origin-left after:origin-right after:delay-[0.25s] hover:before:scale-x-100 hover:before:delay-[0.25s] hover:after:scale-x-0 hover:after:delay-0 before:h-[4px] h-[4px] after:h-[4px] before:bottom-[-1.5rem] after:bottom-[-1.5rem] cursor-pointer">
							ex­plain com­plex ideas,
						</span>
						&nbsp;and&nbsp;
						<span className="text-[65rem] leading-[65rem] font-medium font-NeueMontreal relative ease-[0.19, 1, 0.22, 1] before:absolute before:content-[''] before:left-0 text-secondry  before:block before:w-full  before:bg-secondry before:transition before:duration-[0.6s] after:absolute after:content-[''] after:left-0  after:block after:w-full  after:bg-secondry after:transition after:duration-[0.6s] before:scale-x-0 before:origin-left after:origin-right after:delay-[0.25s] hover:before:scale-x-100 hover:before:delay-[0.25s] hover:after:scale-x-0 hover:after:delay-0 before:h-[4px] h-[4px] after:h-[4px] before:bottom-[-1.5rem] after:bottom-[-1.5rem] cursor-pointer">
							hire great peo­ple.
						</span>
					</h1>
				</div>
				<div className="w-full border-y border-[#21212155] my-[50rem] py-[20rem]">
					<div className="px-[50rem] pb-[100rem] w-full flex justify-between">
						<div className="w-[50%]">
							<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
								What you can expect?
							</h3>
						</div>
						<div className="w-[50%]">
							<div className="w-full flex gap-x-[50rem] h-full items-end">
								<div className="w-[40%]">
									<p className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry tracking-wide">
										We create tailored presentations to help you persuade your
										colleagues, clients, or investors. Whether it’s live or
										digital, delivered for one or a hundred people.
									</p>
									<p className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry pt-[30rem] tracking-wide">
										We believe the mix of strategy and design (with a bit of
										coffee) is what makes your message clear, convincing, and
										captivating.
									</p>
								</div>
								<div className="w-[60%] flex justify-end flex-col">
									<h1 className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry pb-[20rem]">
										S:
									</h1>
									<div className="flex flex-col">
										{footerItems.map((item) => (
											<LinkHover
												key={item.id}
												className="w-fit text-[20rem] leading-[30rem] font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1rem] after:bottom-[1rem]"
												title={item.title}
												href={"/"}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-between px-[50rem]">
					<div className="flex flex-col gap-[25rem]">
						<h1 className="text-[65rem] leading-[65rem] font-medium font-NeueMontreal text-secondry">
							Our approach:
						</h1>
						<div
							className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}>
							<Link
								className="text-[19rem] text-white uppercase font-normal font-NeueMontreal w-full"
								href={"/ochi-team"}>
								<Rounded
									className="py-[7rem]"
									backgroundColor="#000">
									<p className="text-white z-10 px-[15px] ml-[30rem] py-[7rem]">
										read more
									</p>
									<div className="bg-white p-[10px] rounded-full scale-[0.3] mr-[15rem] group-hover:scale-[0.9] transition-all z-10 text-black  transform duration-[0.3s] ease-[.215,.61,.355,1]">
										<ArrowUpRight
											strokeWidth={1.5}
											size={28}
											className="opacity-0 group-hover:opacity-100"
										/>
									</div>
								</Rounded>
							</Link>
						</div>
					</div>
					<div
						className={`w-[50%] transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15rem] overflow-hidden ${
							hovered && "scale-[0.96]"
						}`}>
						<Image
							src={aboutImg}
							alt="about-img"
							className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
								hovered && "scale-[1.09]"
							}`}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
