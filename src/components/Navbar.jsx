import {FaTimes, FaBars} from "react-icons/fa";
import {navItems} from "../constants/data";
import {useState} from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	function handleMenuToggle() {
		setIsOpen(!isOpen);
	}

	return (
		<header className="w-full py-4 lg:py-5 border-t border-b border-stone-300 bg-stone-600">
			<div className="container flex items-center justify-between">
				{/* Logo */}
				<a href="#">
					<img
						src="/src/assets/logo.webp"
						alt="logo"
						width={68}
						height={34}
						className="inline-block bg-gray-500 border border-white rounded-full p-2 m-3"
					/>
					<p className="inline-block uppercase text-2xl ms-3 text-white">
						Nova Haven
					</p>
				</a>

				{/* Mobile Menu */}
				<nav className={`navbar ${isOpen ? "active" : ""}`}>
					{/* Close Btn */}
					<button
						onClick={handleMenuToggle}
						className="absolute top-10 right-10 ring ring-grey-30">
						<FaTimes size={30} className="hover:text-white" />
					</button>
					{/* List */}
					<ul className="text-center space-y-8 my-15">
						{navItems.map((item) => (
							<li key={item.id}>
								<a
									href={item.href}
									className="text-2xl uppercase hover:text-white transition-colors">
									{item.label}
								</a>
							</li>
						))}
					</ul>
					yellow
					{/* Contact Btn */}
					<button className="primary-btn mx-auto">Contact Us</button>
				</nav>

				{/* Menu Btn */}
				<button onClick={handleMenuToggle} className="lg:hidden">
					<FaBars size={30} className="hover:text-white" />
				</button>

				{/* Lg Menu */}
				<ul className="max-lg:hidden flex items-center gap-10 uppercase ">
					{navItems.map((item) => (
						<li key={item.id}>
							<a
								href={item.href}
								className="hover:text-white transition-colors">
								{item.label}
							</a>
						</li>
					))}
				</ul>
				{/* Lg Contact Btn */}
				<button className="max-lg:hidden primary-btn">Contact Us</button>
			</div>
		</header>
	);
};

export default Header;
