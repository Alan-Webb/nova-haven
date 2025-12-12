import homeImage from "../assets/homeImg.webp";

const Home = () => {
	return (
		<div className="relative h-screen">
			<img src={homeImage} alt="Nova Haven Venus Office" />
			<div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-black/50"></div>
		</div>
	);
};

export default Home;
