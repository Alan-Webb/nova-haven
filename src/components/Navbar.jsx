import {useState} from "react";
// import {logo} from "../assets/logo.webp";
import {LINKS} from "../constants";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLinkClick = (e, href) => {
		e.preventDefault();
		const targetElement = document.querySelector(href);
		if (targetElement) {
			const offset = -85;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + scrollY + offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<div>
			<nav className="fixed w-full z-50">
				{/* Desktop Menu */}
				<div className="mx-auto hidden lg:flex items-center justify-center bg-stone-300 border-b border-black py-3 backdrop-blur-lg">
					<div className="flex items-center justify-between gap-6">
						<div>
							<a href="#">
								<p className="uppercase me-36 hover:text-stone-600">
									Nova Haven
								</p>
							</a>
						</div>
						<div>
							<ul className="flex items-center gap-4">
								{LINKS.map((item, index) => (
									<li key={index}>
										<a
											href={item.href}
											onClick={(e) => handleLinkClick(e, item.href)}
											className="text-sm hover:text-white">
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{/* Mobile Menu */}
				<div className="backdrop-blur-md lg:hidden">
					<div className="flex items-center justify-center">
						<div>
							<a href="#">
								<p className="uppercase pe-48">Nova Haven</p>
							</a>
						</div>
						<div className="flex items-center">
							<button
								onClick={toggleMobileMenu}
								className="focus:outline-none lg:hidden">
								{isMobileMenuOpen ? (
									<FaTimes className="m-2 h-6 w-5 cursor-pointer" />
								) : (
									<FaBars className="m-2 h-6 w-5 cursor-pointer" />
								)}
							</button>
						</div>
					</div>
					{isMobileMenuOpen && (
						<ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
							{LINKS.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="block w-full text-lg ps-16 pb-4 hover:text-pink-400"
										onClick={(e) => handleLinkClick(e, item.href)}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
