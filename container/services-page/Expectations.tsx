"use client";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Expectations() {
	const [openItemId, setOpenItemId] = useState(null);

	const handleButtonClick = (id: any) => {
		setOpenItemId(openItemId === id ? null : id);
	};

	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
				<Marquee
					title="why us other"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x py-[20px]">
				<div className="w-full flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							What you can expect?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap gap-[20px]">
						{expectationsItems.map((item) => (
							<div
								className="w-[345px] flex justify-between gap-x-[20px] sm:flex-col xm:flex-col gap-[20px]"
								key={item.id}>
								<div className="bg-[#145B52] w-full flex flex-col rounded-[20px] px-[30px] py-[20px]">
									<div className="flex gap-x-[10px] items-center pb-[10px] mb-[100px] ">
										<h1 className="sub-heading font-normal font-NeueMontreal text-white">
											{item.title1}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="small-text font-normal font-NeueMontreal text-white">
											<TextHover
												titile1={item.subTitle1}
												titile2={item.subTitle1}
											/>
										</button>
										<button
											onClick={() => handleButtonClick(item.id)}
											className="small-text uppercase font-normal font-NeueMontreal text-white">
											{openItemId === item.id ? (
												"hide"
											) : (
												<TextHover
													titile1={item.btn}
													titile2={item.btn}
												/>
											)}
										</button>
									</div>
									<AnimatePresence>
										{openItemId === item.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{
													ease: [0.4, 0, 0.2, 1],
													duration: 1,
												}}>
												<div className="border-t border-[#f1f1f155] pt-[20px] text-background mt-[10px]">
													{item.para1}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
