import homeImage from "../assets/homeImg.webp";
import {FaLocationDot} from "react-icons/fa6";

const Home = () => {
	return (
		<div className="relative border-b border-blue-500">
			<img src={homeImage} alt="Nova Haven Venus Office" />
			<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-black/60 flex items-center justify-center">
				<div className="text-center text-white max-w-5xl px-4 lg:-mt-20 xl:-mt-120">
					<h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mt-8 mb-4 bg-linear-to-r from-sky-300 via-sky-400 to-sky-500 bg-clip-text text-transparent tracking-tight p-3">
						Strategic housing solutions for a multi-planet future
					</h1>
					<p className="text-lg md:text-2xl mb-8 text-gray-100">
						Preparing for the next stage of human expansion
					</p>
					{/* Search */}
					<div className="bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto">
						<div className="flex flex-col md:flex-row gap-3">
							<input
								type="text"
								name="search"
								placeholder="Search by Location"
								className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200"
							/>
							<button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
								Search
							</button>
						</div>
						{/* Favorite Locations */}
						<div className="grid grid-cols-3 gap-3 mt-6">
							<div className="flex flex-col items-center bg-slate-400/50 rounded-lg transition-transform hover:scale-105 cursor-pointer">
								<FaLocationDot size={24} className="text-blue-600 mb-2" />
								<span className="text-semibold text-white">Europa</span>
							</div>

							<div className="flex flex-col items-center bg-slate-400/50 rounded-lg transition-transform hover:scale-105 cursor-pointer">
								<FaLocationDot size={24} className="text-blue-600 mb-2" />
								<span className="text-semibold text-white">Mars</span>
							</div>

							<div className="flex flex-col items-center bg-slate-400/50 rounded-lg transition-transform hover:scale-105 cursor-pointer">
								<FaLocationDot size={24} className="text-blue-600 mb-2" />
								<span className="text-semibold text-white">Saturn</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
