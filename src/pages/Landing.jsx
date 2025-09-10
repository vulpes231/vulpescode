import React from "react";
import { styles } from "../styles/styles";
import { About, Contact, Footer, Hero, Projects } from "../components";

const Landing = () => {
	return (
		<section className={`${styles.section} ${styles.color.background}`}>
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</section>
	);
};

export default Landing;
