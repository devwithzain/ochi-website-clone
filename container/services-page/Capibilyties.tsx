"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { serviceCapaybilitiesItem } from "@/constants";

export default function Capibilyties() {
	const [hovered, setHovered] = useState(false);
	const [hovered1, setHovered1] = useState(false);
	return (
		<div className="w-full bg-about py-[80rem] rounded-t-[20px]">
			<div className="w-[82%] pl-[50rem] mb-[70rem]">
				<h1 className="text-[65rem] leading-[65rem] font-medium font-NeueMontreal text-secondry">
					<span className="link-flash cursor-pointer">Let’s be honest.</span>
					There are really no excuses to have a bad presentation anymore. No one
					has time for poorly communicated ideas. Focus on what you do best —
					growing your business, while we do our best at &nbsp;
					<span className="link-flash cursor-pointer">
						making your presentations awesome.
					</span>
				</h1>
			</div>
			<div className="w-full flex justify-between py-[20rem] px-[50rem] border-t border-[#21212155]">
				<div className="w-[10%]">
					<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
						Our Capabilities:
					</h3>
				</div>
				<div className="w-[90%] flex flex-col gap-y-[50rem]">
					{serviceCapaybilitiesItem.map((item) => (
						<div
							className="w-full flex justify-between"
							key={item.id}>
							<div className="w-[40%] flex justify-end mr-[150rem]">
								{hovered && item.id === 1 ? (
									<Image
										src={item.src1}
										alt="img"
										width={300}
										height={200}
										className="w-[300px] h-[200px] rounded-[20rem]"
									/>
								) : (
									hovered1 &&
									item.id === 1 && (
										<Image
											src={item.src2}
											alt="img"
											width={300}
											height={200}
											className="w-[300px] h-[200px] rounded-[20rem]"
										/>
									)
								)}
							</div>
							<div className="w-[25%]">
								<div className="flex gap-x-[10rem] flex-col pb-[20rem]">
									<div className="flex items-center gap-x-[10rem] pb-[20rem]">
										<span className="w-[12px] h-[12px] rounded-full bg-secondry" />
										<h1 className="text-[18rem] leading-[21rem] uppercase font-medium font-NeueMontreal text-secondry">
											{item.title1}
										</h1>
									</div>
								</div>
								<div
									className="flex flex-col gap-y-[12rem]"
									onMouseEnter={() => setHovered(item.id === 1 && true)}
									onMouseLeave={() => setHovered(item.id === 1 && false)}>
									{item.links1.map((link) => (
										<Button
											href={link.href}
											title={link.title}
											key={link.id}
										/>
									))}
								</div>
							</div>
							<div className="w-[25%]">
								<div className="flex gap-x-[10rem] flex-col pb-[20rem]">
									<div className="flex items-center gap-x-[10rem] pb-[20rem]">
										<span className="w-[12px] h-[12px] rounded-full bg-secondry" />
										<h1 className="text-[18rem] leading-[21rem] uppercase font-medium font-NeueMontreal text-secondry">
											{item.title2}
										</h1>
									</div>
								</div>
								<div
									className="flex flex-col gap-y-[12rem]"
									onMouseEnter={() => setHovered1(item.id === 1 && true)}
									onMouseLeave={() => setHovered1(item.id === 1 && false)}>
									{item.links2.map((link) => (
										<Button
											href={link.href}
											title={link.title}
											key={link.id}
										/>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
