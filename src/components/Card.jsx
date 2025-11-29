import {CardItems} from "../constants/data";
import {LuCircleArrowOutUpRight} from "react-icons/lu";

const Card = () => {
	return (
		<section>
			<div className="container grid gap-2.5 border-y border-stone-500 py-3 rounded-2xl grid-cols-2 lg:grid-cols-4">
				{CardItems.map((item) => (
					<div
						key={item.id}
						className="bg-stone-700 rounded-xl px-3.5 py-4">
						<span className="flex justify-self-end mb-1.5 hover:text-white transition-colors cursor-pointer">
							<LuCircleArrowOutUpRight size={24} />
						</span>
						<div className="max-w-max mx-auto">
							<img src={item.icon} alt={item.label} width={48} height={48} />
						</div>
						<p className="text-white text-center font-semibold mt-3.5">{item.label}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Card;
