"use client";
import { useEffect } from "react";
import { Herocontact, Form } from "@/container";

export default function Contact() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Herocontact />
			<Form />
		</>
	);
}
