import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Featured from "./components/Featured";

const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Card />
				<Featured />
			</main>
		</>
	);
};

export default App;
