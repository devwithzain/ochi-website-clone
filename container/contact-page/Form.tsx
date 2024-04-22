import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RoundButton } from "@/components";

export default function Form() {
	return (
		<section className="w-full padding-x pb-[100px]">
			<div className="w-full flex flex-col gap-[15px]">
				<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
					<div className="flex gap-[15px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							Hi! My name is
						</h2>
						<input
							type="text"
							placeholder="Enter your name*"
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[51%] sm:w-full xm:w-full"
						/>
					</div>
					<div className="flex gap-[15px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							and I work with
						</h2>
						<input
							type="text"
							placeholder="Compony name type here*"
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[49% sm:w-full xm:w-full]"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15px] w-full sm:flex-col xm:flex-col">
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							I’m looking for a partner to help me with
						</h2>
						<input
							type="text"
							placeholder="Your goal type here*"
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[36%] sm:w-full xm:w-full"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15px] w-full sm:flex-col xm:flex-col">
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							With an idea of having that completed
						</h2>
						<input
							type="text"
							placeholder="Date*"
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[36%] sm:w-full xm:w-full"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15px] w-full sm:flex-col xm:flex-col">
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							I am hoping to stay around a budget range of
						</h2>
						<input
							type="text"
							placeholder="Select*"
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[28%] sm:w-full xm:w-full"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15px] w-full sm:flex-col xm:flex-col">
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							You can reach me at
						</h2>
						<input
							type="text"
							placeholder="name@example.com"
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[26%] sm:w-full xm:w-full"
						/>
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							to start the conversation.
						</h2>
					</div>
				</div>
				<div className="w-full flex gap-[15px]">
					<div className="flex gap-[15px] w-full sm:flex-col xm:flex-col">
						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
							Optionally, i’m sharing more:
						</h2>
						<input
							type="text"
							placeholder="Product details type here..."
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[15px] transform transition duration-200 ease-in-out w-[54%] sm:w-full xm:w-full"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
				<div className="flex sm:flex-col xm:flex-col gap-[25px]">
					<div className="flex gap-[10px] items-center">
						<div className="flex gap-[10px]">
							<input
								type="checkbox"
								className="w-[30px]"
							/>
							<p className="paragraph text-secondry font-NeueMontreal font-normal">
								I agree with the
							</p>
						</div>
						<Link
							className="paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover"
							href={"/privacy"}>
							Privacy Policy
						</Link>
					</div>
					<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							bgcolor="#212121"
							href="/"
							title="send inquiry"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div className=""></div>
			</div>
		</section>
	);
}
