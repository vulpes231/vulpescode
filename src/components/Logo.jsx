import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/asset";
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

			{/* Wordmark visible only on md+ screens */}
			<span
				className={`hidden md:inline-block font-extrabold tracking-tight uppercase transition-colors duration-300 text-[#505050] 
					${styles.color.heading} group-hover:${styles.color.primary}`}
			>
				Vulpescode
			</span>
		</Link>
	);
};

export default Logo;
