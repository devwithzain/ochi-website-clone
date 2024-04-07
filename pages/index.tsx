"use client";
import { useEffect } from "react";
import { Marquee, Ready } from "@/components";
import { About, Clients, Home, Projects, VideoHome } from "@/container";

export default function App() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Home />
			<Marquee
				title="we are ochi"
				className="pb-[50px] leading-[280rem] text-[480rem]"
			/>
			<About />
			<VideoHome />
			<Projects />
			<Clients />
			<Ready />
		</>
	);
}
