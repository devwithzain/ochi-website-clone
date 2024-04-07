"use client";
import { TlogoMarqueeProps } from "@/types";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
	wrap,
} from "framer-motion";
import { useRef } from "react";

export default function LogoMarquee({
	children,
	baseVelocity = 100,
}: TlogoMarqueeProps) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});
	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="overflow-hidden flex whitespace-nowrap flex-wrap">
			<motion.div
				className="flex whitespace-nowrap items-center flex-nowrap"
				style={{ x }}>
				<span className="flex">{children} </span>
				<span className="flex">{children} </span>
				<span className="flex">{children} </span>
				<span className="flex">{children} </span>
			</motion.div>
		</div>
	);
}
