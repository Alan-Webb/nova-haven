import {useState} from "react";
import properties from "../constants/data";

const PropertyModal = ({onClose, properties}) => {
	const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isFavorite, setIsFavorite] = useState(false);

	if (!properties || properties.length === 0) {
		return null;
	}

	const currentProperty = properties[currentPropertyIndex];
	const images = currentProperty.images || [];

	function nextImage() {
		setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	}

	function prevImage() {
		setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	}

	return (
		<div
			className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
			onClick={onClose}>
			<div
				className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] overflow-y-auto shadow-2xl"
				onClick={(e) => e.stopPropagation()}>
				{/* Image Gallery */}
				<div className="relative h-[300px] md:h-[400px]">
					<img
						src={images[currentImageIndex]}
						alt="image"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertyModal;
