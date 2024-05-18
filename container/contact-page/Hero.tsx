import Image from "next/image";
import { contactHero } from "@/public";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full padding-x">
			<div className="w-full flex flex-col">
				<div className="w-full margin">
					<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
						<div className="flex items-center gap-[5px]">
							<motion.span
								initial={{ width: 0 }}
								animate={{ width: "auto" }}
								transition={{
									ease: [0.86, 0, 0.07, 0.995],
									duration: 1,
									delay: 1.5,
								}}>
								<Image
									width={120}
									height={50}
									src={contactHero}
									alt="img"
									className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
								/>
							</motion.span>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								LET’S START <br />
							</h1>
						</div>
						A PROJECT TOGETHER
					</h1>
				</div>
				<div className="w-full pb-[15px]">
					<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
						Fill the form below:
					</h3>
				</div>
			</div>
		</section>
	);
}
