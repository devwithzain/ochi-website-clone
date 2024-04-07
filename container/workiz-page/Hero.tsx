import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { workiz, workizhero } from "@/public";
import { BackgroundImg, Rounded } from "@/components";

export default function Hero() {
	return (
		<section className="w-full rounded-b-[20rem]">
			<div className="w-full pb-[200rem]">
				<div className="w-full flex flex-col">
					<div className="w-full mt-[170rem] mb-[130rem] px-[50rem]">
						<div>
							<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "150rem" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 0.5,
										}}
										className="block sm:hidden">
										<Image
											width={120}
											height={50}
											src={workizhero}
											alt="img"
											className="w-[150rem] h-[100rem] object-cover mt-[15px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										WORKIZ EASY
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20rem]">
						<div className="w-full flex justify-between gap-[15rem] px-[50rem]">
							<div className="w-[10%]">
								<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
									Description:
								</h3>
							</div>
							<div className="w-[48%] flex">
								<div className="w-[50%] flex flex-col gap-y-[40rem]">
									<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
										Onboarding, internal and sales <br />
										presentations for software startup.
									</p>
								</div>
								<div className="flex flex-col gap-[10rem] mt-[20rem]">
									<div className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
										<Link
											className="text-[18rem] leading-[18rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white"
											href="/services/">
											<Rounded
												className="py-[10rem]"
												backgroundColor="#000">
												<p className="z-10 px-[15px]">
													onboarding presentations
												</p>
											</Rounded>
										</Link>
									</div>
									<div className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
										<Link
											className="text-[18rem] leading-[18rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white"
											href="/services/">
											<Rounded
												className="py-[10rem]"
												backgroundColor="#000">
												<p className="z-10 px-[15px]">
													policy deck and playbook
												</p>
											</Rounded>
										</Link>
									</div>
									<div className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
										<Link
											className="text-[18rem] leading-[18rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white"
											href="/services/">
											<Rounded
												className="py-[10rem]"
												backgroundColor="#000">
												<p className="z-10 px-[15px]">sales deck</p>
											</Rounded>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full py-[100rem]">
				<BackgroundImg src={workiz} />
			</div>
		</section>
	);
}
