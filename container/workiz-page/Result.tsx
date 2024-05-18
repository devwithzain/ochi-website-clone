export default function Result() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					The Result
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
						<div className="w-1/2 sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Project Outcomes:
							</h3>
						</div>
						<div className="w-1/2 sm:w-full xm:w-full flex sm:flex-col xm:flex-col gap-[20px]">
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									Feedback
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
									“OCHI brought certain level of
									<br className="sm:hidden xm:hidden" /> professionalism into
									our presentations that
									<br className="sm:hidden xm:hidden" /> we were lacking before.
									When I showed <br className="sm:hidden xm:hidden" />
									our management and HR teams the
									<br className="sm:hidden xm:hidden" />
									presentation OCHI developed, they were
									<br className="sm:hidden xm:hidden" />
									amazed <p className="inline-block sm:hidden xm:hidden">
										—
									</p>{" "}
									the final product was exactly
									<br className="sm:hidden xm:hidden" />
									what we needed to create a better
									<br className="sm:hidden xm:hidden" /> experience for new
									employees and our <br className="sm:hidden xm:hidden" />
									clients.”
								</p>
							</div>
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									The Result
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
									We’ve created 10 presentations for Workiz
									<br className="sm:hidden xm:hidden" /> company which improved
									the on-boarding <br className="sm:hidden xm:hidden" />
									process, empowered sales team, and just made
									<br className="sm:hidden xm:hidden" />
									their work easier
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
