import { TtextHoverProps } from "@/types";

export default function TextHover({ titile1, titile2 }: TtextHoverProps) {
	return (
		<div className="group overflow-hidden cursor-pointer transition-all ease-in-out duration-200">
			<div className="relative transition-all  ease-in-out duration-500">
				<div>
					<h1 className="translate-y-[0%] group-hover:translate-y-[-100%] absolute  left-0 transition-all ease-in-out duration-500">
						<div className="translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500">
							{titile1}
						</div>
					</h1>
					<h1 className="relative transition-all ease-in-out duration-500">
						<div className="translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500">
							{titile2}
						</div>
					</h1>
				</div>
			</div>
		</div>
	);
}
