import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Card />
			</main>
		</>
	);
};

export default App;
