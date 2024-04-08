import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	const phrase = ["Eye-", "opening"];
	const phrase1 = ["PRESENTATIONS"];
	return (
		<div className="w-full h-screen px-[50rem] z-30 relative py-[40rem] bg-background rounded-t-[20rem]">
			<div className="w-full h-full flex justify-between sm:flex-col">
				<div className="flex flex-col justify-between">
					<h1 className="text-[163rem] leading-[123rem] font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between pr-[70rem]">
					<div className="">
						<h1 className="text-[163rem] leading-[123rem] font-semibold font-FoundersGrotesk text-secondry uppercase">
							<TextMask>{phrase1}</TextMask>
						</h1>
						<div className="pt-[50rem]">
							<h1 className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry pb-[20rem]">
								S:
							</h1>
							{footerItems.map((item) => (
								<LinkHover
									title={item.title}
									href={item.href}
									key={item.id}
									className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium text-secondry capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
								/>
							))}
						</div>
						<div className="flex justify-between">
							<div className="pt-[50rem]">
								<h1 className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry pb-[20rem]">
									L:
								</h1>
								<div className="flex flex-col gap-y-[10rem]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title={`202-1965 W 4th Awe`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title={`Vancouver, Canada`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title="30 Chukarina"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium  capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
										title="St Lviv, Ukraine"
										href="/"
									/>
								</div>
							</div>
							<div className="pt-[50rem]">
								<h1 className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry pb-[20rem]">
									M:
								</h1>
								{footernavbarItems.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										className="before:h-[1px] after:h-[1px] w-fit text-[20rem] leading-[30rem] font-medium text-secondry capitalize flex flex-col before:bottom-[1rem] after:bottom-[1rem]"
									/>
								))}
							</div>
						</div>
						<div className="pt-[50rem] flex gap-x-[20rem]">
							<h1 className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry">
								E:
							</h1>
							<LinkHover
								title="hello@ochi.design"
								href="/"
								className="before:h-[1px] after:h-[1px] text-[20rem] leading-[30rem] font-medium before:bottom-[-3rem] after:bottom-[-3rem]"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full py-[20rem] flex justify-between">
				<div className="w-[50%]">
					<Link href={"/"}>
						<Image
							src={logo}
							alt="ochi logo"
							width={70}
							height={70}
						/>
					</Link>
				</div>
				<div className="w-[47%] h-full flex justify-between items-end">
					<div className="flex items-center gap-x-[10rem]">
						<h1 className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry opacity-40">
							© ochi design 2024.
						</h1>
						<LinkHover
							title="Legal Terms"
							href="/"
							className="before:h-[1px] after:h-[1px] text-[20rem] leading-[30rem] font-medium text-secondry opacity-40 before:bottom-[-3rem] after:bottom-[-3rem]"
						/>
					</div>
					<div className="">
						<LinkHover
							title="Website by Zain"
							href="/"
							className="before:h-[1px] after:h-[1px] text-[20rem] leading-[30rem] font-medium text-secondry opacity-40 before:bottom-[-3rem] after:bottom-[-3rem]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
