import properties from "../constants/data";
import {FaBath, FaBed, FaHeart, FaLocationDot, FaRuler} from "react-icons/fa6";

const Featured = () => {
	return (
		<section className="max-w-7xl mx-auto py-16 px-4 bg-blue-300">
			<h1 className="text-3xl text-center font-bold mb-8">
				Featured Properties
			</h1>
			{/* Property Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{properties.map((property) => (
					<div
						key={property.id}
						className="bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer">
						{/* Image */}
						<div className="relative">
							<img
								src={property.image}
								className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<button className="absolute top-4 right-4 p-2 rounded-full bg-white/70 hover:bg-white transition-colors duration-300">
								<FaHeart className="text-gray-600 hover:text-red-500 transition-colors duration-300" />
							</button>
						</div>
						{/* Details */}
						<div className="p-6">
							<div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
								<FaLocationDot className="text-blue-600" />
								<span>{property.location}</span>
							</div>

							<div className="text-2xl font-bold text-blue-600 mb-2">
								{property.price}
							</div>

							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								{property.title}
							</h3>

							{/* Icon Stats */}
							<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
								<div className="flex items-center gap-2 ms-3">
									<FaBed className="text-blue-600" />
									<span className="text-gray-600">{property.beds}</span>
								</div>

								<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
									<div className="flex items-center gap-2 ms-5">
										<FaBath className="text-blue-600" />
										<span className="text-gray-600">{property.baths}</span>
									</div>
								</div>

								<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
									<div className="flex items-center gap-2">
										<FaRuler className="text-blue-600" />
										<span className="text-gray-600">{property.sqft}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Featured;
