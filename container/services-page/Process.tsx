import Image from "next/image";
import { useState } from "react";
import { serviceProcessItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState(
		serviceProcessItems[0].id,
	);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y">
			<div className="w-full padding-x mb-[40px]">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Holistic process
				</h1>
			</div>
			{serviceProcessItems.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-[#21212155]"
							: "border-b border-[#21212155]"
					}`}>
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.phase}
							</h3>
						</div>
						<div className="w-[40%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.name}
							</h3>
						</div>
						<div className="w-[10%] sm:w-full xm:w-full flex items-end justify-end">
							<button
								className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
									activeAccordion === item.id
										? "text-gray-300"
										: "text-secondry link-flash"
								}`}
								onClick={() => toggleAccordion(item.id)}>
								{item.button}
							</button>
						</div>
					</div>
					<div
						className={`w-full flex justify-between padding-x sm:flex-col xm:flex-col`}>
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[40%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="w-[130px] h-[130px]">
												<Image
													src={item.src}
													alt="clientImg"
													className="w-full h-full object-cover rounded-[10px]"
												/>
											</div>
											<div>
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.review}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%]" />
					</div>
				</div>
			))}
		</section>
	);
}
