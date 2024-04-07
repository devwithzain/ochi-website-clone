import { animation } from "@/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MaskText({ children }: { children: string[] }) {
	const { ref, inView } = useInView({
		threshold: 0.75,
		triggerOnce: true,
	});

	return (
		<div ref={ref}>
			{children.map((phrase, index) => (
				<div
					key={index}
					className="overflow-hidden">
					<motion.p
						custom={index}
						variants={animation}
						initial="initial"
						animate={inView ? "visible" : ""}>
						{phrase}
					</motion.p>
				</div>
			))}
		</div>
	);
}
