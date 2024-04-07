import Image from "next/image";
import { Marquee } from "@/components";
import { publicationItems } from "@/constants";

export default function Publication() {
	return (
		<section className="w-full bg-marquee pb-[150rem] rounded-t-[20rem]">
			<div className="w-full">
				<Marquee
					title="behance"
					className="text-[480rem] leading-[290rem] pb-[40px]"
				/>
			</div>
			<div className="w-full px-[50rem]">
				<div className="w-full flex justify-between">
					<div className="w-[30%]">
						<h3 className="text-[20rem] leading-[30rem] font-medium text-white font-NeueMontreal">
							Latest publication
						</h3>
					</div>
					<div className="w-[70%] flex gap-y-[20rem]">
						{publicationItems.map((item) => (
							<div
								className="w-full flex justify-between gap-x-[10rem]"
								key={item.id}>
								<div className="w-full flex gap-y-[20rem] rounded-[20rem] px-[10rem] flex-col">
									<div className="group overflow-hidden rounded-[20px]">
										<Image
											src={item.src}
											alt="asd"
											className="w-full h-full group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]	"
										/>
									</div>
									<div className="flex gap-x-[10rem] items-center pb-[10rem]">
										<span className="w-[10px] h-[10px] rounded-full bg-white" />
										<h1 className="text-[18rem] leading-[21rem] uppercase font-medium font-NeueMontreal text-white">
											{item.title}
										</h1>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
