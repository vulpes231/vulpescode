import React from "react";
import { styles } from "../styles/styles";
import { About, Hero, Projects } from "../components";

const Landing = () => {
	return (
		<section className={`${styles.section} ${styles.color.background}`}>
			<Hero />
			<About />
			<Projects />
		</section>
	);
};

export default Landing;
