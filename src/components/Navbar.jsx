import React from "react";
import Logo from "./Logo";
import { LucideMenu, LucideMoon, LucideSun, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectNavSlice, setDarkMode, setToggle } from "../features/navSlice";

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
		<header className="fixed top-0 left-0 w-full h-[70px] bg-white dark:bg-[#1e293b] flex items-center justify-center p-6">
			<nav className="max-w-5xl mx-auto flex justify-between items-center w-full">
				<Logo />
				<div className="hidden md:flex">links</div>
				<span className="flex items-center gap-2">
					<button type="button" onClick={handleDarkMode}>
						{darkMode ? <LucideMoon /> : <LucideSun />}
					</button>
					<button type="button" onClick={handleToggle} className="md:hidden">
						{!toggle ? <LucideMenu size={18} /> : <X size={18} />}
					</button>
				</span>
			</nav>
		</header>
	);
};

export default Navbar;
