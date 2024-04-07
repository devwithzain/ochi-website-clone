import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full py-[150rem] rounded-t-[20rem] bg-background">
			<div>
				<h1 className="text-[65rem] px-[50rem]  leading-[65rem] font-medium font-NeueMontreal text-secondry">
					Two principles we stand behind in <br /> every part of our work:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155] my-[50rem]">
				<div className="w-full p-[50rem] flex justify-between gap-[20rem] items-center">
					<div className="w-[50%] flex flex-col gap-[20rem]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15rem]"
						/>
						<div className="flex flex-col gap-y-[20rem]">
							<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
								Whether the presentation needs to convince or <br />
								educate it always has to change audience
								<br /> perception. We seek insights to make decks
								<br /> unexpectedly enlightening for our audience.
							</p>
						</div>
					</div>
					<div className="w-[50%] flex flex-col gap-[20rem]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15rem]"
						/>
						<div className="flex flex-col gap-y-[20rem]">
							<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
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
