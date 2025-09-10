import React from "react";
import { navLinks } from "../constants/constants";
import { Link } from "react-router-dom";
import { styles } from "../styles/styles";
import { useDispatch } from "react-redux";
import { setToggle } from "../features/navSlice";
import { motion } from "framer-motion";
import { slideLeft } from "../styles/variants";

const Mobilemenu = () => {
	const dispatch = useDispatch();

	return (
		<motion.div
			variants={slideLeft}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.35, ease: "easeOut" }}
			className={`${styles.color.card} fixed top-[80px] right-2 sm:right-5 md:hidden 
			            w-[260px] flex flex-col p-6 gap-6 rounded-2xl shadow-lg 
			            border ${styles.color.border} z-40`}
		>
			{navLinks.map((link) => (
				<Link
					key={link.id}
					className={`${styles.font.link} capitalize relative group`}
					onClick={(e) => {
						e.preventDefault();
						dispatch(setToggle());
					}}
				>
					{link.title}
					{/* Animated underline on hover */}
					<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#16a34a] dark:bg-[#a3e635] transition-all duration-300 group-hover:w-full"></span>
				</Link>
			))}
		</motion.div>
	);
};

export default Mobilemenu;
