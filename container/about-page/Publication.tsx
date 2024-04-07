import Image from "next/image";
import { Marquee } from "@/components";
import { insightsPublicationItems } from "@/constants";

export default function Publication() {
	return (
		<section className="w-full bg-marquee py-[120rem] rounded-t-[20rem] mb-[100rem]">
			<div className="w-full">
				<Marquee
					title="instagram"
					className="text-[516rem] leading-[310rem] pb-[55px]"
				/>
			</div>
			<div className="w-full px-[50rem] py-[30rem]">
				<div className="w-full flex justify-between gap-[20rem] flex-wrap">
					<div>
						<h3 className="text-[20rem] leading-[30rem] font-medium text-white font-NeueMontreal">
							Latest publication
						</h3>
					</div>
					<div className=" flex gap-y-[20rem]">
						{insightsPublicationItems.map((item) => (
							<div
								className="w-full flex justify-between gap-x-[10rem]"
								key={item.id}>
								<div className="w-full flex gap-y-[30rem] rounded-[20rem] px-[10rem] flex-col">
									<Image
										src={item.src}
										alt="img"
										width={400}
										height={400}
										className="w-[400px] h-[400px] rounded-[20rem]"
									/>
									<div>
										<h1 className="text-[20rem] leading-[24rem] font-normal tracking-wider font-NeueMontreal text-white">
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
