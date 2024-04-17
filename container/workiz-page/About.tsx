import Image from "next/image";
import { welcome } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full py-[100px]">
			<div className="w-full flex flex-col">
				<h1 className="text-[65px] padding-x leading-[65px] font-medium font-NeueMontreal text-secondry pb-[50px]">
					Compony
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between gap-[15px] px-[50px]">
						<div>
							<h3 className="text-[20px] leading-[30px] font-medium text-secondry font-NeueMontreal">
								About:
							</h3>
						</div>
						<div className="flex gap-[40px]">
							<div className="flex flex-col gap-y-[20px]">
								<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry">
									Built by home service professionals on a <br /> mission to
									make your “work easy,” Workiz <br />
									empowers service businesses to get more <br /> jobs done, work
									easier, and grow smarter.
								</p>
							</div>
							<div className="flex flex-col gap-[40px]">
								<div>
									<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry underline">
										Industry:
									</p>
									<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry">
										Service Management Software
									</p>
								</div>
								<div>
									<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry underline">
										Company Size:
									</p>
									<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry">
										100+ People
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full padding-x py-[100px]">
				<BackgroundImg src={welcome} />
			</div>
		</section>
	);
}
