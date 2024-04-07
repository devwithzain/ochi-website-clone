import Link from "next/link";
import { Rounded } from "@/components";

export default function Tags({
	item,
	bgcolor,
	className,
}: {
	item: any;
	bgcolor: string;
	className: string;
}) {
	return (
		<div
			className="w-fit rounded-[50px] border border-[#21212199] cursor-pointer"
			key={item.id}>
			<Link
				className={`text-[18rem] leading-[18rem] font-NeueMontreal uppercase ${className}`}
				href={item.href}>
				<Rounded
					className="py-[10rem]"
					backgroundColor={bgcolor}>
					<p className="z-10 px-[15px]">{item.title}</p>
				</Rounded>
			</Link>
		</div>
	);
}
