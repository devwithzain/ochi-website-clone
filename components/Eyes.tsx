"use client";
import Image from "next/image";
import { eyes } from "@/public";
import React, { useEffect, useState } from "react";

export default function Eyes() {
	const [rotate, setRotate] = useState(0);
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 280);
		});
	}, []);
	return (
		<div className="w-full gap-[30px] flex items-center justify-center">
			<div className="w-[350rem] h-[350rem] bg-white border border-[#21212188] rounded-full flex items-center justify-center">
				<Image
					style={{
						transform: `rotate(${rotate}deg)`,
					}}
					src={eyes}
					alt="img"
					className="w-full h-auto object-cover"
				/>
			</div>
			<div className="w-[350rem] h-[350rem] bg-white border border-[#21212188] rounded-full flex items-center justify-center">
				<Image
					style={{
						transform: `rotate(${rotate}deg)`,
					}}
					src={eyes}
					alt="img"
					className="w-full h-auto object-cover"
				/>
			</div>
		</div>
	);
}
