import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Landing } from "./pages";
import { useSelector } from "react-redux";
import { selectNavSlice } from "./features/navSlice";
import { Navbar } from "./components";
import { motion } from "framer-motion";
import { fade } from "./styles/variants";

const App = () => {
	const location = useLocation();
	const { darkMode } = useSelector(selectNavSlice);

	useEffect(() => {
		document.title = `Vulpescode - ${location.pathname}`;
	}, []);

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
		<div>
			<Navbar />
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
	);
};

export default App;
