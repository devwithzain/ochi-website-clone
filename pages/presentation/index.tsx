"use client";
import { useEffect } from "react";
import { Ready } from "@/components";
import {
	Heropresentation,
	Projectspresentation,
	Publication,
} from "@/container";

export default function Presentation() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Heropresentation />
			<Projectspresentation />
			<Publication />
			<Ready />
		</>
	);
}
