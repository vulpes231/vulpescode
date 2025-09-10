import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { container, child, slideUp } from "../styles/variants";

const projects = [
	{
		title: "E-commerce Platform",
		description:
			"A full-featured online store built with the MERN stack, featuring product management, a shopping cart, and integrated crypto payments.",
		tech: ["React", "Node.js", "MongoDB", "Web3.js"],
		link: "#", // replace with live/project link
	},
	{
		title: "Smart Contract Voting App",
		description:
			"A decentralized governance dApp where users can propose and vote using ERC-20 tokens. Built with Solidity, Hardhat, and React.",
		tech: ["Solidity", "Hardhat", "React", "Tailwind"],
		link: "#",
	},
	{
		title: "Fintech Dashboard",
		description:
			"A responsive dashboard for visualizing financial transactions and analytics, optimized for speed and accessibility.",
		tech: ["Next.js", "Chart.js", "TailwindCSS"],
		link: "#",
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className={`${styles.section} ${styles.color.background}`}
		>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.2 }}
				className="flex flex-col gap-12"
			>
				{/* Section Title */}
				<motion.h2
					variants={slideUp}
					className={`${styles.font.title} text-center`}
				>
					Projects
				</motion.h2>

				{/* Project Grid */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, idx) => (
						<motion.div
							key={idx}
							variants={child}
							className={`${styles.color.card} flex flex-col justify-between`}
						>
							<div className="flex flex-col gap-3">
								<h3
									className={`${styles.font.subtitle} ${styles.color.heading}`}
								>
									{project.title}
								</h3>
								<p className={styles.font.body}>{project.description}</p>

								{/* Tech Stack Badges */}
								<div className="flex flex-wrap gap-2 mt-2">
									{project.tech.map((t, i) => (
										<span
											key={i}
											className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
										>
											{t}
										</span>
									))}
								</div>
							</div>

							{/* CTA */}
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`mt-4 inline-block ${styles.font.button}`}
							>
								View Project
							</a>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Projects;
