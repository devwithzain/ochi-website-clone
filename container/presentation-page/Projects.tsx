"use client";
import { useRef } from "react";
import { ProjectCard, Tags } from "@/components";
import { presentationProjectItem } from "@/constants";

export default function Projects() {
	const container = useRef(null);
	return (
		<div
			className="w-full h-full"
			ref={container}>
			<div className="w-full flex flex-col items-center justify-center bg-about">
				<div
					data-scroll
					data-scroll-speed="-.2"
					className="bg-[#BFDA62] w-[75%] py-[20px] rounded-t-[10px]"
				/>
				<div
					className="bg-[#B8D25E] relative z-20 w-[90%] py-[20px] rounded-t-[10px]"
					data-scroll
					data-scroll-speed="-.1"
				/>
			</div>
			<section className="w-full relative z-30 py-[150rem] rounded-t-[20rem] bg-background">
				<div className="">
					<p className="text-[65rem] leading-[65rem] font-normal px-[50rem] font-NeueMontreal text-secondry mt-[20rem] mb-[80rem]">
						Purpose driven, strategy-led presentations <br />
						that people care about.
					</p>
				</div>
				<div className="w-full flex justify-between gap-y-[50rem] px-[50rem] pt-[100rem] flex-wrap">
					{presentationProjectItem.map((item) => (
						<div
							className="w-[49%]"
							key={item.id}>
							<div className="flex gap-x-[10rem] items-center pb-[10rem]">
								<span className="w-[10px] h-[10px] rounded-full bg-secondry" />
								<h1 className="text-[18rem] leading-[21rem] uppercase font-medium font-NeueMontreal text-secondry">
									{item.title}
								</h1>
							</div>
							<ProjectCard
								item={item}
								key={item.id}
							/>
							<div className="flex flex-wrap items-center gap-[10rem] mt-[20rem]">
								{item.links.map((link) => (
									<Tags
										bgcolor="#212121"
										item={link}
										key={link.id}
										className="hover:text-white"
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
