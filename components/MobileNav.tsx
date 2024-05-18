"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { logo, mobileLogo } from "@/public";
import { footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className="w-full hidden justify-between items-center h-[8vh] padding-x sm:flex xm:flex md:flex">
				<Link href={"/"}>
					<Image
						src={logo}
						alt="ochi logo"
						width={70}
						height={70}
					/>
				</Link>
				<HiOutlineMenuAlt4
					onClick={() => setToggle(true)}
					className="text-3xl cursor-pointer text-black"
				/>
			</div>
			{toggle && (
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 0.85, ease: [0.3, 0.86, 0.36, 0.95] }}
						className="fixed top-0 bottom-0 right-0 z-50 w-full min-h-screen flex justify-end items-end flex-col bg-secondry">
						<div className="w-full flex justify-between items-center h-[8vh] border-b border-[#f1f1f155] padding-x">
							<Link href={"/"}>
								<Image
									src={mobileLogo}
									alt="ochi logo"
									width={70}
									height={70}
								/>
							</Link>
							<IoMdClose
								onClick={() => setToggle(false)}
								className="text-3xl cursor-pointer text-background"
							/>
						</div>
						<ul className="h-full w-full flex justify-center text-left flex-col gap-[10px] padding-x">
							{footernavbarItems.map((item) => (
								<Link
									href={item.href}
									key={item.id}
									onClick={(toggle) => setToggle(!toggle)}
									className="text-[80px] leading-[67px] font-FoundersGrotesk uppercase font-bold tracking-[-.9] text-background">
									{item.title}
								</Link>
							))}
						</ul>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
}
