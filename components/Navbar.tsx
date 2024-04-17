import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.nav
			variants={navVariants}
			className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between"
			animate={hidden ? "hidden" : "vissible"}>
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
			<div className="flex gap-x-[20px] sm:hidden xm:hidden w-[50%]">
				{navbarItems.map((item) => (
					<Link
						key={item.id}
						className={`w-fit text-[21px] leading-[32px] lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px] font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover ${
							item.id === 5 && "ml-[220px]"
						}`}
						href={item.href}>
						<TextHover
							titile1={item.title}
							titile2={item.title}
						/>
					</Link>
				))}
			</div>
		</motion.nav>
	);
}
