import Link from "next/link";
import Image from "next/image";
import { latestItemss } from "@/constants";

export default function Insights() {
	return (
		<section className="w-full pb-[150rem] sticky top-0 -z-30 bg-background">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="px-[50rem] pb-[30rem]">
						<h1 className="text-[65rem] leading-[65rem] font-normal tracking-[-1.3px] text-[#212121] font-NeueMontreal">
							Insights
						</h1>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20rem]">
						<div className="w-full flex gap-[450rem] px-[50rem]">
							<div>
								<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
									Latest publication:
								</h3>
							</div>
							<div>
								{latestItemss.map((item) => (
									<div
										key={item.id}
										className={`group relative overflow-hidden ${
											item.id == 1 && "hidden"
										} block`}>
										<Link href={item.href}>
											<div className="w-[350px] overflow-hidden rounded-[15rem]">
												<Image
													src={item.src}
													alt="img"
													className="w-full hover:scale-[1.09] transition transform duration-[1s] ease-[.4,0,.2,1]"
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
													Presenting to an International Audience: <br /> Tips
													and Lessons Learned.
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
				</div>
			</div>
		</section>
	);
}
