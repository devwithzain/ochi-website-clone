import Link from "next/link";
import Image from "next/image";
import { latestItemss } from "@/constants";

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full mt-[170rem] mb-[130rem] px-[50rem]">
						<div>
							<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								INSIGHTS
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20rem]">
						<div className="w-full flex justify-between gap-[15rem] px-[50rem]">
							<div className="w-[10%]">
								<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
									Latest insights:
								</h3>
							</div>
							<div className="flex flex-wrap items-center gap-[10rem]">
								<div className="rounded-[50px] border border-[#212121] py-[5px] px-[15rem] cursor-pointer">
									<Link
										className="text-[18rem] leading-[18rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out"
										href={"/"}>
										ALL
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex gap-[20rem] px-[50rem] py-[150rem]">
						{latestItemss.map((item) => (
							<div
								key={item.id}
								className="group relative overflow-hidden">
								<Link href={item.href}>
									<div className="w-[450px] overflow-hidden rounded-[15rem]">
										<Image
											src={item.src}
											alt="img"
											className="w-full hover:scale-[1.09] hover:blur-sm transition duration-300 ease-linear"
										/>
									</div>
									<div className="flex gap-[10rem] items-center absolute left-[25rem] top-[25rem]">
										{item.links.map((link) => (
											<div
												className="transform translate-y-[-200%] group-hover:translate-y-0 transition-all duration-300 ease-in-out"
												key={link.id}>
												<div className="rounded-[50px] border border-about py-[5px] px-[15rem] cursor-pointer">
													<Link
														className="text-[18rem] leading-[22rem] font-NeueMontreal text-about uppercase"
														href={"/"}>
														{link.title}
													</Link>
												</div>
											</div>
										))}
									</div>
									<div className="flex flex-col gap-[7rem]">
										<h3 className="text-[20rem] leading-[30rem] font-NeueMontreal font-normal text-secondry">
											Presenting to an International Audience: <br /> Tips and
											Lessons Learned.
										</h3>
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal font-normal text-gray-400">
											{item.subTitle}
										</p>
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal font-normal text-gray-400">
											{item.date}
										</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
