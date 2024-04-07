export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full mt-[170rem] mb-[130rem] px-[50rem]">
						<div>
							<h1 className="text-[160rem] leading-[123rem] tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								services
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] text-[65rem] leading-[65rem] font-normal px-[50rem] font-NeueMontreal text-secondry mt-[20rem] mb-[80rem]">
							We create&nbsp;
							<span className="link-flash cursor-pointer">eye-catching</span>
							&nbsp;and&nbsp;
							<span className="link-flash cursor-pointer">eye-opening</span>
							presentations that educate, inspire and influence action.
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20rem] pr-[50rem] flex-col gap-y-[50rem]">
						<div className="w-full flex justify-between">
							<div className="w-[48%]">
								<p className="text-[20rem] px-[50rem] font-NeueMontreal text-secondry">
									We do this by following <br /> simple approach:
								</p>
							</div>
							<div className="w-[48%] flex justify-between">
								<div className="w-[50%] flex flex-col gap-y-[40rem]">
									<div className="flex flex-col gap-y-[20rem]">
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry underline">
											Goal defines it all
										</p>
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
											What do you want to achieve? <br /> Understanding the
											purpose of your <br /> presentation allows us to tailor it
											to ensure it
											<br /> hits the mark and drives results.
										</p>
									</div>
									<div className="flex flex-col gap-y-[20rem]">
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry underline">
											Audience is the hero
										</p>
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
											Who is it for? What do they want? Why <br /> does it
											matter to them? We need to know <br /> your audience well
											enough to deliver a <br /> personalized presentation that
											they truly <br />
											care about.
										</p>
									</div>
								</div>
								<div className="w-[50%]">
									<div className="flex flex-col gap-y-[20rem]">
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry underline">
											Context makes a difference
										</p>
										<p className="text-[20rem] leading-[30rem] font-NeueMontreal text-secondry">
											When do you present? Online or live? At a <br />
											sales meeting, at a conference, or just
											<br /> sending a cold email? We knit the context
											<br /> together to decide the style of the
											<br /> presentation.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
