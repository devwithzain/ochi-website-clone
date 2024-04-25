export default function Credit() {
	return (
		<section className="w-full pb-[100px]">
			<div className="w-full flex flex-col">
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					Credit
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
						<div>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Services we provided:
							</h3>
						</div>
						<div className="w-[50%] flex sm:flex-col xm:flex-col justify-between gap-[20px]">
							<div className="flex flex-col gap-[20px]">
								<div className="flex flex-col">
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Client:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										Tomer Levy
									</p>
								</div>
								<div className="flex flex-col">
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Project Manager:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										Ihor Hulyahrodskyy
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-[20px]">
								<div className="flex flex-col">
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Team:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										Ihor Hulyahrodskyy, Kseniia Palamarchuk, Olha <br /> Sereda
									</p>
								</div>
								<div className="flex flex-col">
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Motion & Animation:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										Vadym Herasymenko
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
