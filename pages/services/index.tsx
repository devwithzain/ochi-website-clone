"use client";
import {
	Capibilyties,
	Clientsservices,
	Expectations,
	Process,
	Archive,
	Heroservices,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Services() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroservices />
				<Process />
				<Capibilyties />
				<Clientsservices />
				<Archive />
				<Expectations />
				<Ready />
			</Curve>
		</>
	);
}
