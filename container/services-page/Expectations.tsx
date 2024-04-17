import { Marquee } from "@/components";
import { expectationsItems } from "@/constants";
import { useState } from "react";

export default function Expectations() {
	const [click, setClick] = useState(false);
	return (
		<section className="w-full bg-marquee pb-[150px] rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px] pt-[100px]">
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
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						{expectationsItems.map((item) => (
							<div
								className="w-full flex justify-between gap-x-[20px] sm:flex-col xm:flex-col gap-[20px]"
								key={item.id}>
								<div className="bg-[#145B52] w-full flex flex-col gap-y-[150px] rounded-[20px] px-[30px] py-[20px]">
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-white">
											{item.title1}
										</h1>
									</div>
									{click && (
										<div className="border-t border-[#fff]">
											asldbajsbfljasbl
										</div>
									)}
									<div className="w-full flex justify-between items-center">
										<button className="paragraph font-normal font-NeueMontreal text-white">
											{item.subTitle1}
										</button>
										<button
											onClick={() => setClick(!click)}
											className="paragraph uppercase font-normal font-NeueMontreal text-white">
											{!click ? item.btn : "unread"}
										</button>
									</div>
								</div>
								<div className="bg-[#145B52] w-full flex flex-col gap-y-[150px] rounded-[20px] px-[30px] py-[20px]">
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-white">
											{item.title2}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="paragraph font-normal font-NeueMontreal text-white">
											{item.subTitle2}
										</button>
										<button className="paragraph uppercase font-normal font-NeueMontreal text-white">
											{item.btn}
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
