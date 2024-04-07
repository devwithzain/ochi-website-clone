import { background } from "@/public";
import { achiveItems } from "@/constants";
import { BackgroundImg } from "@/components";

export default function Archive() {
	return (
		<section className="w-full pb-[150rem]">
			<div className="px-[50rem]">
				<BackgroundImg src={background} />
			</div>
			<div className="w-full pt-[140rem]">
				<div className="w-full px-[50rem] pt-[20rem] border-t border-[#21212155]  flex justify-between">
					<div className="w-[50%]">
						<h3 className="text-[20rem] leading-[30rem] font-medium text-secondry font-NeueMontreal">
							Ochi in numbers:
						</h3>
					</div>
					<div className="w-[50%] flex flex-col gap-y-[20rem]">
						{achiveItems.map((item) => (
							<div
								className="w-full flex justify-between gap-x-[20rem]"
								key={item.id}>
								<div className="bg-[#E1E1E1] w-full flex flex-col gap-y-[150rem] rounded-[20rem] px-[30rem] py-[20rem]">
									<div className="flex gap-x-[10rem] items-center pb-[10rem]">
										<h1 className="text-[65rem] leading-[65rem] font-normal font-NeueMontreal text-secondry">
											{item.title1}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="text-[20rem] leading-[30rem] font-normal font-NeueMontreal text-secondry">
											{item.subTitle1}
										</button>
									</div>
								</div>
								<div className="bg-[#E1E1E1] w-full flex flex-col gap-y-[150rem] rounded-[20rem] px-[30rem] py-[20rem]">
									<div className="flex gap-x-[10rem] items-center pb-[10rem]">
										<h1 className="text-[65rem] leading-[65rem] font-normal font-NeueMontreal text-secondry">
											{item.title2}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="text-[20rem] leading-[30rem] font-normal font-NeueMontreal text-secondry">
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
