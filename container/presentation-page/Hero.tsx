import { Eyes } from "@/components";

export default function Hero() {
	return (
		<section className="w-full px-[50rem] bg-about sticky top-0 -z-20 h-[60vh]">
			<div className="w-full pt-[170rem]">
				<div className="w-fit relative">
					<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
						work
						<sup className="text-[16px] font-normal absolute top-[20px] ml-[10px] font-NeueMontreal">
							(9)
						</sup>
					</h1>
				</div>
			</div>
			<Eyes />
		</section>
	);
}
