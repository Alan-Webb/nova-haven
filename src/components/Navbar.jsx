import {useState} from "react";
import Logo from "../assets/logo.webp";
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
				<div className="mx-auto hidden md:flex items-center justify-center bg-stone-300 border-b border-black py-3 backdrop-blur-lg">
					<div className="flex items-center justify-between gap-6">
						<div>
							<div>
								<img
									src={Logo}
									alt="Nova Haven logo"
									className="inline-block h-6 w-6 me-2"
								/>
								<a
									href="#"
									className="inline-block uppercase me-36 hover:text-stone-600 cursor-pointer">
									Nova Haven
								</a>
							</div>
						</div>
						<div>
							<ul className="flex items-center gap-4">
								{LINKS.map((item, index) => (
									<li key={index}>
										<a
											href={item.href}
											onClick={(e) => handleLinkClick(e, item.href)}
											className="text-sm hover:text-stone-700">
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>
						<button className="border bg-stone-400 rounded-xl px-4 py-2 ms-24 cursor-pointer hover:bg-stone-500">
							Sign Up
						</button>
					</div>
				</div>
				{/* Mobile Menu */}
				<div className="bg-stone-300 md:hidden">
					<div className="flex items-center justify-end me-12 py-2">
						<div className="flex items-center">
							<button
								onClick={toggleMobileMenu}
								className="focus:outline-none lg:hidden">
								{isMobileMenuOpen ? (
									<FaTimes className="m-2 h-6 w-5 cursor-pointer hover:text-stone-600" />
								) : (
									<FaBars className="m-2 h-6 w-5 cursor-pointer hover:text-stone-600" />
								)}
							</button>
						</div>
					</div>
					{isMobileMenuOpen && (
						<ul className="ml-4 mt-4 py-6 flex flex-col gap-4 backdrop-blur-md">
							{LINKS.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="block w-full text-lg uppercase font-semibold ps-16 pb-4 hover:text-stone-600"
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
