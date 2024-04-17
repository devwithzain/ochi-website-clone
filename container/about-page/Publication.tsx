import Image from "next/image";
import { insightsPublicationItems } from "@/constants";

export default function Publication() {
	return (
		<section className="w-full bg-marquee py-[120px] rounded-t-[20px] mb-[100px]">
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
								className="w-full flex justify-between gap-[10px]"
								key={item.id}>
								<div className="w-full flex gap-[20px] rounded-[20px] px-[10px] flex-col">
									<Image
										src={item.src}
										alt="img"
										width={400}
										height={400}
										className="w-[400px] h-[400px] rounded-[20px]"
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
