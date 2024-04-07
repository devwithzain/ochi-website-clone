import { Marquee } from "@/components";
import { Team1, logo } from "@/public";
import Image from "next/image";

export default function Team() {
	return (
		<section className="w-full bg-marquee min-h-screen rounded-t-[20rem]  sticky -top-[60%] -z-40">
			<Marquee
				title="the team core of"
				className="text-[516rem] leading-[310rem] pb-[55px]"
			/>
			<div className="w-full bg-marquee flex items-center justify-center pb-[100rem]">
				<div className="w-[80%] p-[20rem] bg-background rounded-[20rem]">
					<div className="w-full flex flex-col justify-between">
						<div className="flex justify-between">
							<div>
								<Image
									src={logo}
									alt="ochi-logo"
									width={50}
									height={50}
								/>
							</div>
							<div>
								<Image
									src={Team1}
									alt="ochi-logo"
									width={300}
									height={300}
									className="rounded-[10rem]"
								/>
								<p className="text-[15rem] leading-[23rem] font-NeueMontreal font-normal text-secondry py-[10rem]">
									Founder and CEO
								</p>
							</div>
						</div>
						<div className="flex justify-between items-end">
							<div>
								<h1 className="text-[113rem] leading-[85rem] font-bold font-FoundersGrotesk text-secondry">
									IHOR <br /> HULYAHRODSKYY
								</h1>
							</div>
							<div>
								<h1 className="text-[113rem] leading-[85rem] font-bold font-FoundersGrotesk text-secondry">
									1 / 4
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
