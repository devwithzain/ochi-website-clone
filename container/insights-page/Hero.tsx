import Link from "next/link";
import Image from "next/image";
import { latestItemss } from "@/constants";
import { Rounded, Tags } from "@/components";

export default function Hero() {
	const str = [
		{
			id: 1,
			title: "all",
			href: "/",
		},
		{
			id: 2,
			title: "presentation template",
			href: "/",
		},
		{
			id: 3,
			title: "public speaking",
			href: "/",
		},
		{
			id: 4,
			title: "storytelling",
			href: "/",
		},
	];
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								INSIGHTS
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20px]">
						<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
									Latest insights:
								</h3>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap items-center gap-[10px]">
								{str.map((item, i) => (
									<div key={i}>
										{item.id === 1 ? (
											<div
												className="w-fit rounded-[50px] border border-[#21212199] cursor-pointer bg-black"
												key={item.id}>
												<Link
													className="small-text font-NeueMontreal uppercase text-white"
													href={item.href}>
													<div className="py-[2px]">
														<p className="z-10 px-[15px]">{item.title}</p>
													</div>
												</Link>
											</div>
										) : (
											<Tags
												bgcolor="#212121"
												item={item}
												className="hover:text-white"
											/>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full padding-x">
						<div className="w-[50%] sm:w-full xm:w-full flex gap-[20px] padding-y sm:flex-col xm:flex-col gap-y-[20px]">
							{latestItemss.map((item) => (
								<div
									key={item.id}
									className="group relative overflow-hidden">
									<Link href={item.href}>
										<div className="overflow-hidden rounded-[15px] transition cursor-pointer  transform duration-[1s] ease-[.4,0,.2,1]">
											<Image
												src={item.src}
												alt="img"
												className="sm:w-full xm:w-full hover:scale-[1.09] group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
											/>
										</div>
										<div className="flex gap-y-[10px] absolute left-[25px] top-[-100px] group-hover:top-[20px] flex-col">
											{item.links.map((link) => (
												<div
													className="transform translate-y-[-200%] group-hover:translate-y-0 transition-all duration-300 ease-in-out"
													key={link.id}>
													<div className="rounded-[50px] border border-secondry py-[3px] px-[15px] cursor-pointer">
														<Link
															className="small-text font-NeueMontreal text-secondry uppercase"
															href={"/"}>
															{link.title}
														</Link>
													</div>
												</div>
											))}
										</div>
										<div className="flex flex-col gap-[7px] mt-[10px]">
											<h3 className="paragraph font-NeueMontreal font-normal text-secondry">
												Presenting to an International Audience: <br /> Tips and
												Lessons Learned.
											</h3>
											<p className="paragraph font-NeueMontreal font-normal text-gray-400">
												{item.subTitle}
											</p>
											<p className="paragraph font-NeueMontreal font-normal text-gray-400">
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
		</section>
	);
}
