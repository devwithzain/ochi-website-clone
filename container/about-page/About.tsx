import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full py-[150rem]">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20rem]">
					<div className="w-full flex justify-between gap-[15rem] px-[50rem] pb-[150rem]">
						<div>
							<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
								We are ochi design:
							</h3>
						</div>
						<div className="w-[48%] flex justify-between">
							<div className="w-[50%] flex flex-col gap-y-[40rem]">
								<div className="flex flex-col gap-y-[20rem]">
									<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
										The team of designers, storytellers, and <br /> passionate
										collaborators, who work
										<br /> together to create industry-shifting <br />
										presentations that win people&apos;s hearts <br />
										and minds.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20rem]">
									<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
										And we strive to become one of the most <br />
										recognizable & influential presentation
										<br /> agencies of the time who does that.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-[50rem]">
				<BackgroundImg src={backgroundAbout} />
			</div>
		</section>
	);
}
