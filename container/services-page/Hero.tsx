export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								services
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							We create&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								eye-catching&nbsp;
							</span>
							and&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								eye-opening&nbsp;
							</span>
							presentations that educate, inspire and influence action.
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									We do this by following <br /> simple approach:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Goal defines it all
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											What do you want to achieve?
											<br className="sm:hidden xm:hidden" /> Understanding the
											purpose of your <br className="sm:hidden xm:hidden" />
											presentation allows us to tailor it to ensure it
											<br className="sm:hidden xm:hidden" /> hits the mark and
											drives results.
										</p>
									</div>
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Audience is the hero
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											Who is it for? What do they want? Why
											<br className="sm:hidden xm:hidden" /> does it matter to
											them? We need to know
											<br className="sm:hidden xm:hidden" /> your audience well
											enough to deliver a <br className="sm:hidden xm:hidden" />
											personalized presentation that they truly
											<br className="sm:hidden xm:hidden" />
											care about.
										</p>
									</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Context makes a difference
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											When do you present? Online or live? At a
											<br className="sm:hidden xm:hidden" />
											sales meeting, at a conference, or just
											<br className="sm:hidden xm:hidden" /> sending a cold
											email? We knit the context
											<br className="sm:hidden xm:hidden" /> together to decide
											the style of the
											<br className="sm:hidden xm:hidden" /> presentation.
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
