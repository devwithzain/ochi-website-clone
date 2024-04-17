import Image from "next/image";
import {
	after,
	chelengeBg,
	showcase1,
	showcase2,
	showcase3,
	showcase4,
	showcase5,
	showcase6,
} from "@/public";
import { BackgroundImg } from "@/components";

export default function Chelenge() {
	return (
		<section className="w-full pb-[100px]">
			<div className="w-full flex flex-col">
				<h1 className="text-[65px] padding-x leading-[65px] font-medium font-NeueMontreal text-secondry border-b pb-[50px] border-[#21212155]">
					Challenge & Solution
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between gap-[15px] px-[50px]">
						<div>
							<h3 className="text-[20px] leading-[30px] font-medium text-secondry font-NeueMontreal">
								Services we provided:
							</h3>
						</div>
						<div className="w-[50%] flex gap-[40px]">
							<div className="flex flex-col gap-y-[20px]">
								<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry">
									The goal was to build straightforward, <br /> professional,
									but emotional presentations
									<br /> that are delivered to colleagues and
									<br />
									clients. We’ve tailored the decks for the <br />
									audiences and amplified the presentation
									<br />
									materials to match the brand’s quality and <br />
									improve the message.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full padding-x py-[100px]">
				<BackgroundImg src={chelengeBg} />
			</div>
			<div className="w-[80%] mx-auto py-[50px] flex gap-[20px]">
				<div className="w-[49%]">
					<Image
						src={showcase1}
						className="w-full  object-cover rounded-[20px]"
						alt="chelengeBgImg"
					/>
				</div>
				<div className="w-[49%]">
					<Image
						src={showcase2}
						className="w-full  object-cover rounded-[20px]"
						alt="chelengeBgImg"
					/>
				</div>
			</div>
			<div className="w-full padding-x py-[100px]">
				<BackgroundImg src={showcase3} />
			</div>
			<div className="w-[80%] mx-auto py-[50px] flex gap-[20px]">
				<div className="w-[49%]">
					<Image
						src={showcase4}
						className="w-full  object-cover rounded-[20px]"
						alt="chelengeBgImg"
					/>
				</div>
				<div className="w-[49%]">
					<Image
						src={showcase5}
						className="w-full  object-cover rounded-[20px]"
						alt="chelengeBgImg"
					/>
				</div>
			</div>
			<div className="w-full padding-x py-[100px]">
				<BackgroundImg src={showcase6} />
			</div>

			<div className="w-[80%] mx-auto py-[50px] flex gap-[20px]">
				<div className="w-full">
					<Image
						src={after}
						className="w-full  object-cover rounded-[20px]"
						alt="chelengeBgImg"
					/>
				</div>
			</div>
		</section>
	);
}
