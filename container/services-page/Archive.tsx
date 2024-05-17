import { background } from "@/public";
import { achiveItems } from "@/constants";
import { BackgroundImg } from "@/components";

export default function Archive() {
	return (
		<section className="w-full padding-y">
			<div className="padding-x w-full">
				<BackgroundImg src={background} />
			</div>
			<div className="w-full padding-y">
				<div className="w-full padding-x pt-[20px] border-t border-[#21212155] flex sm:flex-col xm:flex-col justify-between gap-y-[20px]">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
							Ochi in numbers:
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[20px]">
						{achiveItems.map((item) => (
							<div
								className="w-full flex justify-between gap-[20px] sm:flex-col xm:flex-col"
								key={item.id}>
								<div className="bg-[#E1E1E1] w-full flex flex-col gap-y-[150px] rounded-[20px] px-[30px] py-[20px]">
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-secondry">
											{item.title1}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="paragraph font-normal font-NeueMontreal text-secondry">
											{item.subTitle1}
										</button>
									</div>
								</div>
								<div className="bg-[#E1E1E1] w-full flex flex-col gap-y-[150px] rounded-[20px] px-[30px] py-[20px]">
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-secondry">
											{item.title2}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="paragraph font-normal font-NeueMontreal text-secondry">
											{item.subTitle2}
										</button>
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
