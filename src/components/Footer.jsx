import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h3 className="uppercase text-xl font-bold mb-2">Nova Haven Co.</h3>
					<p className="text-lg">
						Your Trusted Partner in housing throughout the Solar System.
					</p>
				</div>
				{/* Quick Links */}
				<div>
					<h4 className="font-bold mb-2">Quick Links</h4>
					<ul className="space-y-2 text-gray-400">
						<li className="cursor-pointer hover:text-white">Home</li>
						<li className="cursor-pointer hover:text-white">Properties</li>
						<li className="cursor-pointer hover:text-white">About Us</li>
						<li className="cursor-pointer hover:text-white">Contact</li>
					</ul>
				</div>
				{/* Contact */}
				<div>
					<h4 className="font-bold mb-2">Contact Info</h4>
					<ul className="space-y-2">
						<li>6767 Outer Ring</li>
						<li>Saturn Orbital Hub</li>
						<li>SAO 69856</li>
						<li>(inter-solar) 123-45678</li>
					</ul>
				</div>
				{/* Social Links */}
				<div>
					<h4 className="font-bold mb-4">Follow Us</h4>
					<div className="flex space-x-4">
						<a href="#">
							<FaFacebook className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer" />
						</a>
						<a href="#">
							<FaTwitter className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer" />
						</a>
						<a href="#">
							<FaInstagram className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer" />
						</a>
						<a href="#">
							<FaLinkedin className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
