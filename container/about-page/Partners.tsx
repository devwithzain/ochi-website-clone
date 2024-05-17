import Image from "next/image";
import { Ratings } from "@/components";
import { aboutPartberItems } from "@/constants";

export default function Principles() {
	return (
		<section className="w-full bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry">
					We’ve built long-lasting partnerships
					<br className="sm:hidden xm:hidden" /> with the most ambitious brands
					<br className="sm:hidden xm:hidden" />
					across the globe:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155] mt-[50px]">
				<div className="flex justify-between gap-[20px] sm:flex-col xm:flex-col pt-[50px]">
					{aboutPartberItems.map((item) => (
						<div
							className="w-[440px] sm:w-[380px] xm:w-[350px]  padding-x py-[30px] shrink-0"
							key={item.id}>
							<div className="w-full h-full flex flex-col gap-[50px]">
								<div>
									<Image
										src={item.src}
										alt="img"
										width={80}
										height={80}
										className="w-[80px] h-[80px]"
									/>
								</div>
								<div className="flex flex-col gap-[20px]">
									<p className="paragraph text-secondry font-NeueMontreal font-normal underline">
										{item.title}
									</p>
									<p className="paragraph text-secondry font-NeueMontreal font-normal">
										{item.para}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="padding-x padding-y">
				<Ratings />
			</div>
		</section>
	);
}
