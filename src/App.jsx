import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Landing } from "./pages";
import { useSelector } from "react-redux";
import { selectNavSlice } from "./features/navSlice";
import { Navbar } from "./components";
import { motion } from "framer-motion";
import { fade } from "./styles/variants";
import { styles } from "./styles/styles";

const App = () => {
	const location = useLocation();
	const { darkMode } = useSelector(selectNavSlice);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	return (
		<div className={`${styles.color.background} relative`}>
			<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#16a34a]/50 to-transparent rounded-full blur-3xl" />
			<div className="absolute bottom-5 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#2563eb]/50 to-transparent rounded-full blur-3xl" />
			<div className="absolute bottom-[40%] right-[25%] w-[300px] h-[300px] bg-gradient-to-tr from-[#2be6fa]/50 to-transparent rounded-full blur-3xl" />

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#334155_1px,transparent_0)] bg-[length:20px_20px]" />

			<Navbar />
			<div className="className=" relative z-10>
				<Routes location={location} key={location.pathname}>
					<Route
						path="/"
						element={
							<motion.div
								variants={fade}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: 0.5 }}
							>
								<Landing />
							</motion.div>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
