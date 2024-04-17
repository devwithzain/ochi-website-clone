import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
	return (
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
	);
}
