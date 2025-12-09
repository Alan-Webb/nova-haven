import Home from "./components/Home";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="min-h-screen w-full bg-gray-200">
			<Home />
			<Featured />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
