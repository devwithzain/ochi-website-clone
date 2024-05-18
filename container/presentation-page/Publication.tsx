import Image from "next/image";
import { Marquee } from "@/components";
import { publicationItems } from "@/constants";

export default function Publication() {
	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px] mt-[-10px] z-30 relative">
			<div className="w-full bg-marquee z-10 relative">
				<Marquee
					title="behance"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x">
				<div className="w-full flex justify-between pt-[20px] sm:flex-col xm:flex-col gap-y-[20px]">
					<div className="w-[30%] sm:w-full xm:w-full">
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							Latest publication
						</h3>
					</div>
					<div className="w-[70%] flex gap-y-[20px] sm:flex-col xm:flex-col sm:w-full xm:w-full gap-[10px]">
						{publicationItems.map((item) => (
							<div
								className="w-full flex justify-between gap-[20px] sm:flex-col xm:flex-col"
								key={item.id}>
								<div className="w-full flex gap-[20px] rounded-[20px] flex-col">
									<div className="group overflow-hidden rounded-[20px]">
										<Image
											src={item.src}
											alt="asd"
											className="w-full h-full group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]	"
										/>
									</div>
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<span className="w-[10px] h-[10px] rounded-full bg-white" />
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-white">
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
