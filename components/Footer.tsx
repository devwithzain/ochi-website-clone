import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	const phrase = ["Eye-", "opening"];
	const phrase1 = ["PRESENTATIONS"];
	return (
		<div className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-background rounded-t-[20px]">
			<div className="w-full h-full flex justify-between sm:flex-col xm:flex-col">
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h1 className="heading font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h1 className="heading font-semibold font-FoundersGrotesk text-secondry uppercase">
							<TextMask>{phrase1}</TextMask>
						</h1>
						<div className="pt-[50px]">
							<h1 className="xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium font-NeueMontreal text-secondry pb-[20px]">
								S:
							</h1>
							{footerItems.map((item) => (
								<LinkHover
									title={item.title}
									href={item.href}
									key={item.id}
									className="before:h-[1px] after:h-[1px] w-fit xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
								/>
							))}
						</div>
						<div className="flex justify-between">
							<div className="pt-[50px]">
								<h1 className="xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium font-NeueMontreal text-secondry pb-[20px]">
									L:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`202-1965 W 4th Awe`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`Vancouver, Canada`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="30 Chukarina"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="St Lviv, Ukraine"
										href="/"
									/>
								</div>
							</div>
							<div className="pt-[50px]">
								<h1 className="xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium font-NeueMontreal text-secondry pb-[20px]">
									M:
								</h1>
								{footernavbarItems.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										className="before:h-[1px] after:h-[1px] w-fit xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
									/>
								))}
							</div>
						</div>
						<div className="pt-[50px] flex gap-x-[20px]">
							<h1 className="xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium font-NeueMontreal text-secondry">
								E:
							</h1>
							<LinkHover
								title="hello@ochi.design"
								href="/"
								className="before:h-[1px] after:h-[1px] xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium before:bottom-[-3px] after:bottom-[-3px]"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full pb-[20px] pt-[50px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Link href={"/"}>
						<Image
							src={logo}
							alt="ochi logo"
							width={70}
							height={70}
						/>
					</Link>
				</div>
				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex items-center gap-x-[10px]">
						<h1 className="xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium font-NeueMontreal text-secondry opacity-40">
							© ochi design 2024.
						</h1>
						<LinkHover
							title="Legal Terms"
							href="/"
							className="before:h-[1px] after:h-[1px] xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>
					<div className="">
						<LinkHover
							title="Website by Zain"
							href="/"
							className="before:h-[1px] after:h-[1px] xl:text-[31px] xl:leading-[35px] text-[16px] leading-[24px] font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
