import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rounded } from "@/components";
import { aboutPartberItems } from "@/constants";
import { brand01, brand02, brand03 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full bg-background">
			<div>
				<h1 className="text-[65rem] px-[50rem]  leading-[65rem] font-medium font-NeueMontreal text-secondry">
					We’ve built long-lasting partnerships <br /> with the most ambitious
					brands <br />
					across the globe:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155] my-[50rem]">
				<motion.div
					drag="x"
					className="flex justify-between gap-[20rem] shrink-0 pt-[150rem]">
					{aboutPartberItems.map((item) => (
						<div
							className="w-[500px] h-[600px] p-[30px] shrink-0"
							key={item.id}>
							<div className="w-full h-full flex flex-col gap-[50rem]">
								<div>
									<Image
										src={item.src}
										alt="img"
										width={80}
										height={80}
										className="w-[80px] h-[80px]"
									/>
								</div>
								<div className="flex flex-col gap-[20rem]">
									<p className="text-[20rem] leading-[30rem] text-secondry font-NeueMontreal font-normal underline">
										{item.title}
									</p>
									<p className="text-[20rem] leading-[30rem] text-secondry font-NeueMontreal font-normal">
										{item.para}
									</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>
			<div className="w-full flex justify-between py-[100rem] px-[50rem]">
				<div className="w-[49.5%] justify-between h-[60vh] gap-x-[10rem]">
					<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-marquee relative">
						<Image
							src={brand01}
							alt="brandImg"
							width={150}
							height={150}
						/>
						<div className="absolute bottom-[35rem] left-[35rem] flex items-center justify-center border border-about px-[12rem] py-[3rem] cursor-pointer rounded-full">
							<Link
								className="text-[19rem] text-about uppercase font-normal font-NeueMontreal tracking-wider"
								href={"/"}>
								&copy;2019 - 2024
							</Link>
						</div>
					</div>
				</div>
				<div className="w-[49.5%] flex gap-[15rem] h-[60vh]">
					<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-secondry relative">
						<Image
							src={brand02}
							alt="brandImg"
							width={150}
							height={150}
						/>
						<div className="absolute left-[35rem] bottom-[35rem] w-fit rounded-[50px] border border-white cursor-pointer">
							<Link
								className="text-[18rem] leading-[18rem] font-NeueMontreal text-white uppercase tracking-wider"
								href="/services">
								<Rounded
									backgroundColor="#fff"
									className="">
									<p className="z-10 px-[15px] py-[10rem] hover:text-black">
										rating 5.0 on clutch
									</p>
								</Rounded>
							</Link>
						</div>
					</div>
					<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-secondry relative">
						<Image
							src={brand03}
							alt="brandImg"
							width={150}
							height={150}
						/>
						<div className="absolute left-[35rem] bottom-[35rem] w-fit rounded-[50px] border border-white cursor-pointer">
							<Link
								className="text-[18rem] leading-[18rem] font-NeueMontreal text-white uppercase tracking-wider"
								href="/services">
								<Rounded
									backgroundColor="#fff"
									className="">
									<p className="z-10 px-[15px] py-[10rem] hover:text-black">
										buisness bootcamp alumini
									</p>
								</Rounded>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
