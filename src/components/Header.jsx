import {FaTimes, FaBars} from "react-icons/fa";

const Header = () => {
	return (
		<header>
			<div className="container">
				{/* Logo */}
				<a href="#">
					<img
						src="/src/assets/logo.webp"
						alt="logo"
						width={114}
						height={34}
						className="bg-yellow-500 border border-stone-300 rounded-full p-2 m-2"
					/>
				</a>
				{/* Mobile Menu */}
				<nav>
					{/* Close Btn */}
					<button>
						<FaTimes size={30} />
					</button>
					{/* List */}
					<ul></ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
