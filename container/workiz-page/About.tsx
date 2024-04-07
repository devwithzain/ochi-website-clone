import Image from "next/image";
import { welcome } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full py-[100rem]">
			<div className="w-full flex flex-col">
				<h1 className="text-[65rem] px-[50rem] leading-[65rem] font-medium font-NeueMontreal text-secondry pb-[50rem]">
					Compony
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20rem]">
					<div className="w-full flex justify-between gap-[15rem] px-[50rem]">
						<div>
							<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
								About:
							</h3>
						</div>
						<div className="flex gap-[40rem]">
							<div className="flex flex-col gap-y-[20rem]">
								<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
									Built by home service professionals on a <br /> mission to
									make your “work easy,” Workiz <br />
									empowers service businesses to get more <br /> jobs done, work
									easier, and grow smarter.
								</p>
							</div>
							<div className="flex flex-col gap-[40rem]">
								<div>
									<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry underline">
										Industry:
									</p>
									<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
										Service Management Software
									</p>
								</div>
								<div>
									<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry underline">
										Company Size:
									</p>
									<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
										100+ People
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full px-[50rem] py-[100rem]">
				<BackgroundImg src={welcome} />
			</div>
		</section>
	);
}
