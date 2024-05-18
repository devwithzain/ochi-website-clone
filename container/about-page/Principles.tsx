import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Two principles we stand behind in
					<br className="sm:hidden xm:hidden" /> every part of our work:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Whether the presentation needs to convince or <br />
								educate it always has to change audience
								<br /> perception. We seek insights to make decks
								<br /> unexpectedly enlightening for our audience.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								The presentation helps to see what&apos;s hidden,
								<br /> unseen, or simply never known before. We use <br />
								design to drive their attention, focus them to <br />
								clearly see, and help them feel the message.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
