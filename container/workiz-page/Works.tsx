import Link from "next/link";
import { workizItem } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { Marquee, ProjectCard, Rounded, Tags } from "@/components";

export default function Works() {
	return (
		<section className="w-full bg-marquee rounded-t-[20rem] sticky -top-[95%]">
			<Marquee
				title="other projects"
				className="text-[516rem] leading-[310rem] pb-[55px]"
			/>
			<div className="w-full flex justify-between gap-y-[50rem] px-[50rem] pb-[50rem] flex-wrap">
				{workizItem.map((item) => (
					<div
						className="w-[49%] sm:w-full"
						key={item.id}>
						<div className="flex gap-x-[10rem] items-center pb-[10rem]">
							<span className="w-[10px] h-[10px] rounded-full bg-white" />
							<h1 className="text-[18rem] leading-[21rem] uppercase font-medium font-NeueMontreal text-white">
								{item.title}
							</h1>
						</div>
						<ProjectCard
							item={item}
							key={item.id}
						/>
						<div className="flex items-center gap-[10rem] mt-[20rem] flex-wrap">
							{item.links.map((link) => (
								<Tags
									className="text-white hover:text-secondry"
									bgcolor="#fff"
									item={link}
									key={link.id}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex pt-[50rem] pb-[200rem] justify-center">
				<div className="flex items-center justify-between bg-white cursor-pointer rounded-full group">
					<Link
						className="text-[19rem] text-secondry uppercase font-normal font-NeueMontreal"
						href={"/presentation"}>
						<Rounded
							className="py-[10rem]"
							backgroundColor="#212121">
							<p className="text-secondry z-10 px-[15px] ml-[30rem] py-[10rem] group-hover:text-white">
								view all case studies
							</p>
							<div className="bg-secondry p-[15px] rounded-full scale-[0.3] mr-[17rem] group-hover:scale-[1] transition-all z-10 text-secondry group-hover:bg-white  duration-300 ease-in-out">
								<ArrowUpRight
									strokeWidth={1.5}
									size={25}
								/>
							</div>
						</Rounded>
					</Link>
				</div>
			</div>
		</section>
	);
}
