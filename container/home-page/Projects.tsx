import Link from "next/link";
import { projectItem } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard, Rounded, Tags } from "@/components";

export default function Projects() {
	return (
		<section className="w-full rounded-t-[20rem]">
			<h1 className="text-[65rem] px-[50rem] py-[150rem] leading-[65rem] font-medium font-NeueMontreal text-secondry pb-[50rem] border-b border-[#21212155]">
				Featured projects
			</h1>
			<div className="w-full flex justify-between gap-y-[50rem] px-[50rem] pt-[100rem] flex-wrap">
				{projectItem.map((item) => (
					<div
						className="w-[49%]"
						key={item.id}>
						<div className="flex gap-x-[10rem] items-center pb-[10rem]">
							<span className="w-[10px] h-[10px] rounded-full bg-secondry" />
							<h1 className="text-[18rem] leading-[21rem] uppercase font-medium font-NeueMontreal text-secondry">
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
									className="hover:text-white"
									bgcolor="#212121"
									item={link}
									key={link.id}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex pt-[100rem] justify-center">
				<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
					<Link
						className="text-[19rem] text-white uppercase font-normal font-NeueMontreal"
						href={"/presentation"}>
						<Rounded
							className="py-[10rem]"
							backgroundColor="#000000">
							<p className="text-white z-10 px-[15px] ml-[30rem] py-[10rem]">
								view all case studies
							</p>
							<div className="bg-white p-[15px] rounded-full scale-[0.2] mr-[17rem] group-hover:scale-[1] transition-all z-10 text-secondry group-hover:bg-white  duration-300 ease-in-out">
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
