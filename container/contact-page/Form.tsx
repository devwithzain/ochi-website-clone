import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Form() {
	return (
		<section className="w-full p-[50rem]">
			<div className="w-full flex flex-col gap-[15rem]">
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15rem] w-[50%]">
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							Hi! My name is
						</h3>
						<input
							type="text"
							placeholder="Enter your name*"
							className="text-[20rem] leading-[20rem] font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[51%]"
						/>
					</div>
					<div className="flex gap-[15rem] w-[50%]">
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							and I work with
						</h3>
						<input
							type="text"
							placeholder="Compony name type here*"
							className="text-[20rem] leading-[20rem] font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[49%]"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15rem] w-full">
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							I’m looking for a partner to help me with
						</h3>
						<input
							type="text"
							placeholder="Your goal type here*"
							className="text-[20rem] leading-[20rem] font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[36%]"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15rem] w-full">
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							With an idea of having that completed
						</h3>
						<input
							type="text"
							placeholder="Date*"
							className="text-[20rem] leading-[20rem] font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[36%]"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15rem] w-full">
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							I am hoping to stay around a budget range of
						</h3>
						<input
							type="text"
							placeholder="Select*"
							className="text-[20rem] leading-[20rem] font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[28%]"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15rem] w-full">
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							You can reach me at
						</h3>
						<input
							type="text"
							placeholder="name@example.com"
							className="text-[20rem] leading-[20rem] font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[26%]"
						/>
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							to start the conversation.
						</h3>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15rem] w-full">
						<h3 className="text-[65rem] leading-[65rem] font-NeueMontreal font-normal text-secondry">
							Optionally, i’m sharing more:
						</h3>
						<input
							type="text"
							placeholder="Product details type here..."
							className="text-[20rem] leading-[20rem] font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[54%]"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-end pt-[50rem]">
				<div className="flex gap-[25px]">
					<div className="flex gap-[10px] items-center">
						<div className="flex gap-[10rem]">
							<input
								type="checkbox"
								className="w-[30px]"
							/>
							<p className="text-[20rem] leading-[20rem] text-secondry font-NeueMontreal font-normal">
								I agree with the
							</p>
						</div>
						<Link
							className="text-[20rem] leading-[30rem] font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover"
							href={"/privacy"}>
							Privacy Policy
						</Link>
					</div>
					<div className="w-[230px] flex items-center justify-between bg-secondry py-[7rem] cursor-pointer rounded-full group">
						<Link
							className="text-[19rem] text-white uppercase font-normal ml-[30rem] font-NeueMontreal"
							href={"/"}>
							send inquiry
						</Link>
						<div className="bg-white p-[15px] rounded-full scale-[0.3] mr-[17rem] group-hover:scale-[1] transition-all duration-300 ease-in-out">
							<ArrowUpRight
								strokeWidth={1.5}
								size={25}
							/>
						</div>
					</div>
				</div>
				<div className=""></div>
			</div>
		</section>
	);
}
