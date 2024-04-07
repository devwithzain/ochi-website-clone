import Link from "next/link";
import { TButtonProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

export default function Button({ href, title }: TButtonProps) {
	return (
		<div className="flex flex-col pb-[10rem] w-fit">
			<div className="flex items-center gap-x-[10rem] group">
				<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[7px] px-[12rem] cursor-pointer">
					<Link
						className="text-[18rem] leading-[18rem] font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out"
						href={href}>
						{title}
					</Link>
				</div>
				<div className="w-[40rem] flex items-center justify-center h-[40rem] border border-[#21212199] rounded-[50px] p-[15rem]  group-hover:bg-secondry transition-all duration-200 ease-in-out cursor-pointer scale-0 group-hover:scale-100">
					<p className="text-[20rem] font-normal text-secondry group-hover:text-background">
						<ArrowUpRight
							strokeWidth={1.25}
							size={20}
						/>
					</p>
				</div>
			</div>
		</div>
	);
}
