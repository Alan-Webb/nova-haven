import {useState} from "react";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PropertyModal from "./components/PropertyModal";

const App = () => {
	const [selectedProperty, setSelectedProperty] = useState(null);

	return (
		<div className="min-h-screen w-full bg-gray-200">
			<Home />
			<Featured setSelectedProperty={setSelectedProperty} />
			<Contact />
			<Footer />
			{selectedProperty && (
				<PropertyModal
					properties={[selectedProperty]}
					onClose={() => setSelectedProperty(null)}
				/>
			)}
		</div>
	);
};

export default App;
