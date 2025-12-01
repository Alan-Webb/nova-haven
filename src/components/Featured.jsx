import Title from "./Title";

const Featured = () => {
	return (
		<section>
			<div className="container">
				{/* Title */}
				<Title
					title="Featured Properties"
					text="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and available throughout the Solar System."
					link="View All Properties"
				/>
				{/* Card */}
			</div>
		</section>
	);
};

export default Featured;
