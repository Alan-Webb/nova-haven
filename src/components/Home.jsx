import homeImage from "../assets/homeImg.webp";

const Home = () => {
	return (
		<div className="relative h-[100vh]">
			<img src={homeImage} alt="Nova Haven Venus Office" />
			<div className="absolute"></div>
		</div>
	);
};

export default Home;
