"use client";
import {
	Heroabout,
	Aboutabout,
	Team,
	Partners,
	Insights,
	Principles,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function About() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroabout />
				<Aboutabout />
				<Team />
				<Principles />
				<Partners />
				<Insights />
				<Ready />
			</Curve>
		</>
	);
}
