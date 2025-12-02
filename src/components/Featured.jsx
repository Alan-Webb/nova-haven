import Title from "./Title";
import {featuredItems} from "../constants/data";

const Featured = () => {
	return (
		<section className="section">
			<div className="container">
				{/* Title */}
				<Title
					title="Featured Properties"
					text="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and available throughout the Solar System."
					link="View All Properties"
				/>
				{/* Card */}
				<div className="mt-10 lg:mt-16">
					{featuredItems.map((item) => (
						<div key={item.id} className="border border-stone-300 p-6 rounded-xl">
							<div>
								<img src={item.img} alt={item.title} width={354} height={255} className="w-full h-full object-cover rounded-xl"/>
							</div>
							{/* Content */}
							<div className="mt-3.5">
								<h4>{item.title}</h4>
								<p>{item.text}</p>
								<div className="flex items-center flex-wrap">
									{item.icons.map((item, index) => (
										<div key={index}>
											<span>
												<img
													src={item.icon}
													alt="icon"
													width={20}
													height={20}
												/>
											</span>
											<p>{item.label}</p>
										</div>
									))}
								</div>

								<div>
									<p>
										Price <span>{item.price}</span>
									</p>
									<button className="secondary-btn">View All Properties</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Featured;
