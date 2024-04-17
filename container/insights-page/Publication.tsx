import Image from "next/image";
import { Marquee } from "@/components";
import { insightsPublicationItems } from "@/constants";

export default function Publication() {
	return (
		<section className="w-full bg-marquee py-[120px] rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
				<Marquee
					title="instagram"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x py-[30px]">
				<div className="w-full flex justify-between gap-[20px] flex-wrap sm:flex-col xm:flex-col">
					<div>
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							Latest publication
						</h3>
					</div>
					<div className="flex gap-[20px] sm:flex-col xm:flex-col">
						{insightsPublicationItems.map((item) => (
							<div
								className="w-full flex justify-between"
								key={item.id}>
								<div className="w-full flex gap-y-[20px] rounded-[20px] flex-col transform duration-[1s] ease-[.4,0,.2,1] overflow-hidden">
									<Image
										src={item.src}
										alt="img"
										width={280}
										height={280}
										className="sm:w-full xm:w-full w-[280px] h-[280px] rounded-[20px] transform duration-[1s] ease-[.4,0,.2,1]"
									/>
									<div>
										<h1 className="paragraph font-normal tracking-wider font-NeueMontreal text-white">
											{item.title}
										</h1>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
