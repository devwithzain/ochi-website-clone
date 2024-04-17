"use client";
import {
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
} from "@/container";
import { useEffect } from "react";
import { Ready } from "@/components";

export default function CaseId() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Heroworkiz />
			<Aboutworkiz />
			<Chelenge />
			<VideoWorkiz />
			<Result />
			<Credit />
			<Works />
			<Ready />
		</>
	);
}
