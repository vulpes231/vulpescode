import React from "react";
import { Link } from "react-router-dom";
import { logb, logo } from "../assets/asset";
import { styles } from "../styles/styles";

const Logo = () => {
	return (
		<Link to="/" className="flex items-center gap-2 group">
			<img
				src={logo}
				alt="Vulpescode Logo"
				className="h-[40px] md:h-[55px] object-contain transition-transform duration-300 group-hover:scale-110 
             bg-[#f3f4f6] dark:bg-[#1e293b] p-1.5 rounded-xl"
			/>

			<img
				src={logb}
				// alt="Vulpescode Logo"
				className="h-[40px] md:h-[55px] object-contain transition-transform duration-300 group-hover:scale-110 p-1.5 rounded-xl hidden md:inline-block"
			/>
		</Link>
	);
};

export default Logo;
