export default function Heading({
	title,
	className,
}: {
	title: string;
	className?: string;
}) {
	return (
		<h1
			className={`sub-heading font-medium font-NeueMontreal text-secondry ${className}`}>
			{title}
		</h1>
	);
}
