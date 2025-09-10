import React from "react";
import { motion } from "framer-motion";
import { child, container } from "../styles/variants";
import { styles } from "../styles/styles";
import { text } from "../constants/constants";
import { Link } from "react-scroll";

const Hero = () => {
	return (
		<section
			className={`${styles.section} ${styles.color.background}`}
			id="home"
		>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.1 }}
				className="relative z-10 max-w-6xl px-6 w-full"
			>
				<div className="flex flex-col items-center text-center gap-8 md:gap-12">
					{/* Headline */}
					<motion.h1
						variants={child}
						className={`${styles.font.hero} ${styles.color.heading}`}
					>
						Crafting Scalable Web & Blockchain Solutions
					</motion.h1>

					{/* Description */}
					<motion.p
						variants={child}
						className={`${styles.font.body} max-w-3xl`}
					>
						{text.split(" ").map((word, index) => (
							<motion.span
								key={index}
								variants={child}
								className="inline-block mr-1"
							>
								{word}
							</motion.span>
						))}
					</motion.p>

					{/* CTAs */}
					<motion.div
						variants={child}
						className="flex flex-wrap justify-center gap-4"
					>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
							className={`px-6 py-3 ${styles.font.button} ${styles.color.ctaBg} ${styles.color.ctaText} rounded-xl shadow-lg hover:opacity-90 transition`}
						>
							View My Work
						</Link>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
							className={`px-6 py-3 ${styles.font.button} ${styles.color.accent} bg-white dark:bg-[#1e293b] rounded-xl shadow-lg hover:bg-gray-100 dark:hover:bg-[#334155] transition`}
						>
							Let’s Connect
						</Link>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
