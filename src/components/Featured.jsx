import Title from "./Title";
import {featuredItems} from "../constants/data";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules";

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
				{/* Card Wrapper */}
				<Swiper
					modules={[Navigation, Autoplay]}
					className="flex flex-col gap-12 mt-10 lg:mt-16">
					{featuredItems.map((item) => (
						// Card
						<SwiperSlide
							key={item.id}
							className="flex flex-1 flex-col md:flex-row gap-6  border border-stone-300 p-6 rounded-xl">
							<div>
								<img
									src={item.img}
									alt={item.title}
									width={354}
									height={255}
									className="mx-auto rounded-xl"
								/>
							</div>
							{/* Content */}
							<div className="mt-3.5 sm:mt-12 md:mt-24 mx-auto text-center">
								<h4>{item.title}</h4>
								<p>{item.text}</p>
								<div className="flex justify-center gap-1.5 my-5 text-white">
									{item.icons.map((item, index) => (
										<div
											key={index}
											className="ring ring-stone-300 rounded-[28px] flex gap-1.5 p-3 bg-stone-600">
											<span>
												<img
													src={item.icon}
													alt="icon"
													width={20}
													height={20}
												/>
											</span>
											<p className="text-sm">{item.label}</p>
										</div>
									))}
								</div>
								{/* Price & Button */}
								<div className="flex flex-col gap-4">
									<p className="flex justify-center gap-3">
										Price{""}
										<span className="text-white text-lg">{item.price}</span>
									</p>
									<button className="secondary-btn">View All Properties</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Featured;
