"use client";
import { useEffect } from "react";
import { Heroinsights, Publicationinsights } from "@/container";

export default function Insights() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Heroinsights />
			<Publicationinsights />
		</>
	);
}
