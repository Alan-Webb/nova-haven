const Title = ({title, text, link}) => {
	return (
		<div>
			{/* Title */}
			<div className="flex flex-col justify-between items-center gap-3 text-center my-4">
				<span className="mb-2.5 block">
					<img
						src="./src/assets/title-icon.svg"
						alt="icon"
						width={55}
						height={24}
					/>
				</span>
				<h2>{title}</h2>
				<p className="mt-3 max-w-[730px]">{text}</p>
			</div>
			{/* Button */}
			<button className="primary-btn mx-auto my-4">{link}</button>
		</div>
	);
};

export default Title;
