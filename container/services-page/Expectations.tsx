import { Marquee } from "@/components";
import { expectationsItems } from "@/constants";
import { useState } from "react";

export default function Expectations() {
	const [click, setClick] = useState(false);
	return (
		<section className="w-full bg-marquee pb-[150rem] rounded-t-[20rem]">
			<div className="w-full">
				<Marquee
					title="why us other"
					className="text-[480rem] leading-[290rem] pb-[40px]"
				/>
			</div>
			<div className="w-full px-[50rem] py-[20rem]">
				<div className="w-full flex justify-between">
					<div className="w-[50%]">
						<h3 className="text-[20rem] leading-[30rem] font-medium text-white font-NeueMontreal">
							What you can expect?
						</h3>
					</div>
					<div className="w-[50%] flex flex-col gap-y-[20rem]">
						{expectationsItems.map((item) => (
							<div
								className="w-full flex justify-between gap-x-[20rem]"
								key={item.id}>
								<div className="bg-[#145B52] w-full flex flex-col gap-y-[150rem] rounded-[20rem] px-[30rem] py-[20rem]">
									<div className="flex gap-x-[10rem] items-center pb-[10rem]">
										<h1 className="text-[65rem] leading-[65rem] font-normal font-NeueMontreal text-white">
											{item.title1}
										</h1>
									</div>
									{click && (
										<div className="border-t border-[#fff]">
											asldbajsbfljasbl
										</div>
									)}
									<div className="w-full flex justify-between items-center">
										<button className="text-[20rem] leading-[30rem] font-normal font-NeueMontreal text-white">
											{item.subTitle1}
										</button>
										<button
											onClick={() => setClick(!click)}
											className="text-[20rem] leading-[30rem] uppercase font-normal font-NeueMontreal text-white">
											{!click ? item.btn : "unread"}
										</button>
									</div>
								</div>
								<div className="bg-[#145B52] w-full flex flex-col gap-y-[150rem] rounded-[20rem] px-[30rem] py-[20rem]">
									<div className="flex gap-x-[10rem] items-center pb-[10rem]">
										<h1 className="text-[65rem] leading-[65rem] font-normal font-NeueMontreal text-white">
											{item.title2}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="text-[20rem] leading-[30rem] font-normal font-NeueMontreal text-white">
											{item.subTitle2}
										</button>
										<button className="text-[20rem] leading-[30rem] uppercase font-normal font-NeueMontreal text-white">
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
