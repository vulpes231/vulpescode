import React from "react";
import Logo from "./Logo";
import { LucideMenu, LucideMoon, LucideSun, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectNavSlice, setDarkMode, setToggle } from "../features/navSlice";
import Mobilemenu from "./Mobilemenu";
import { navLinks } from "../constants/constants";
import { Link } from "react-scroll";
import { styles } from "../styles/styles";
Link;

const Navbar = () => {
	const dispatch = useDispatch();
	const { darkMode, toggle } = useSelector(selectNavSlice);

	const handleToggle = () => {
		dispatch(setToggle());
	};

	const handleDarkMode = () => {
		dispatch(setDarkMode());
	};

	return (
		<header className="fixed top-0 left-0 w-full h-[70px] backdrop-blur-md bg-white/70 dark:bg-[#0f172a]/70 shadow-sm z-50">
			<nav className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 h-full">
				<Logo />

				{/* Desktop Links */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							className={`${styles.font.link} relative group cursor-pointer`}
							to={link.id}
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
						>
							{link.title}
							{/* Animated underline */}
							<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#16a34a] dark:bg-[#a3e635] transition-all duration-300 group-hover:w-full"></span>
						</Link>
					))}
				</div>

				{/* Right side icons */}
				<span className="flex items-center gap-4">
					<button
						type="button"
						onClick={handleDarkMode}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
					>
						{darkMode ? <LucideMoon size={20} /> : <LucideSun size={20} />}
					</button>

					{/* Mobile menu button */}
					<button
						type="button"
						onClick={handleToggle}
						className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
					>
						{!toggle ? <LucideMenu size={22} /> : <X size={22} />}
					</button>
				</span>
			</nav>

			{toggle && <Mobilemenu />}
		</header>
	);
};

export default Navbar;
