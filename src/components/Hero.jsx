import {heroItems} from "../constants/data";
import {heroStats} from "../constants/data";
import {LuCircleArrowOutUpRight} from "react-icons/lu";

const Hero = () => {
	return (
		<section className="max-lg:py-20">
			<div className="container grid gap-14 lg:grid-cols-2">
				{/* Content */}
				<div className="flex flex-col justify-center md:py-12">
					<h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
						{heroItems.header}
					</h1>
					<p className="m-4 text-center">{heroItems.heroText}</p>

					{/* Buttons */}
					<div className="flex flex-wrap gap-3.5 mx-auto mt-4">
						<button className="primary-btn">Learn More</button>
						<button className="secondary-btn">Browse Properties</button>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
						{heroStats.map((item) => (
							// Card
							<div
								key={item.id}
								className={`border border-stone-300 bg-stone-700 px-5 py-3.5 rounded-xl text-center ${
									item.id === 3 ? "max-sm:col-span-2" : ""
								}`}>
								<h3 className="text-white font-semibold text-3xl">
									{item.value}
									{item.id === 2 ? "K" : ""}
								</h3>
								<p>{item.label}</p>
							</div>
						))}
					</div>
				</div>
				{/* Banner */}
				<figure className="relative">
					<img
						src="./src/assets/hero-banner.webp"
						alt="hero banner"
						width={690}
						height={622}
						className="w-full h-full object-cover"
					/>

					{/* Animated Text */}
					<div className="absolute max-lg:-bottom-16 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:top-10 lg:-left-16 bg-gray-08 rounded-full p-2.5 aspect-square ring ring-stone-300">
						<div className="relative">
							<img
								src="./src/assets/text-shape.svg"
								alt="find you dream property"
								width={106}
								height={106}
								className="text-shape"
							/>

							<button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-stone-700 w-14 h-14 flex items-center justify-center ring ring-stone-300 rounded-full hover:text-stone-500 transition-colors">
								<LuCircleArrowOutUpRight size={24} className="bg-stone-700" />
							</button>
						</div>
					</div>
				</figure>
			</div>
		</section>
	);
};

export default Hero;
