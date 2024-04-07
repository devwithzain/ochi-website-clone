import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
	return (
		<>
			<section className="w-full bg-marquee z-10 relative rounded-t-[20px] py-[100rem]">
				<TextMarquee baseVelocity="0.7">
					<h1
						className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white  whitespace-nowrap tracking-[-5px] ${className}`}>
						{title} &nbsp;
					</h1>
					<h1
						className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white  whitespace-nowrap tracking-[-5px] ${className}`}>
						{title} &nbsp;
					</h1>
				</TextMarquee>
			</section>
		</>
	);
}
