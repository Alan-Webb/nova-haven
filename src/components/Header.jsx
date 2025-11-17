import headerImg from "../assets/headerImg.webp";

const Header = () => {
	return (
		<div className=" ">
			<img src={headerImg} className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" />
		</div>
	);
};

export default Header;
