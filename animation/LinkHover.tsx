import Link from "next/link";
import { TLinkHoverProps } from "@/types";

export default function LinkHover({ href, title, className }: TLinkHoverProps) {
	return (
		<div>
			<Link
				className={`font-NeueMontreal relative ease-[0.19, 1, 0.22, 1] before:absolute before:content-[''] before:left-0 text-secondry  before:block before:w-full  before:bg-secondry before:transition before:duration-[0.6s] after:absolute after:content-[''] after:left-0  after:block after:w-full  after:bg-secondry after:transition after:duration-[0.6s] before:scale-x-0 before:origin-left after:origin-right after:delay-[0.25s] hover:before:scale-x-100 hover:before:delay-[0.25s] hover:after:scale-x-0 hover:after:delay-0 ${className}`}
				href={href}>
				{title}
			</Link>
		</div>
	);
}
