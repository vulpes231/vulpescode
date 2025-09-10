import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { container, child, slideUp } from "../styles/variants";
import { chrono, port, reely } from "../assets/asset";
import { useLocation } from "react-router-dom";

const projects = [
	{
		title: "ChronoTrade Journal App",
		description:
			"Log trades, track performance, calculate position sizes, and access premium analytics with smart lot suggestions.",
		tech: ["React", "Node.js", "MongoDB", "Charts.js", "Redux", "Tailwind"],
		category: "web app",
		image: chrono,
		live: "https://chronotrade.netlify.app",
		repo: "https://github.com/yourname/ecommerce",
	},
	{
		title: "Reelfetch App",
		description:
			"“Download and save videos from Twitter/X, Instagram, TikTok, YouTube, and Facebook—ad-free and hassle-free.”",
		tech: ["React", "Node.js", "Redux", "Tailwind", "FFmpeg", "Axios", "Redis"],
		category: "web app",
		image: reely,
		live: "https://reelfetch.netlify.app",
		repo: "https://github.com/vulpes231/sm-video-downloader-ui",
	},
	{
		title: "Portfolio App",
		description:
			"A personal portfolio web app showcasing projects, skills, and work experience with an interactive, modern interface built with React and Tailwind CSS.",
		tech: ["React", "Node.js", "Redux", "Tailwind"],
		category: "portfolio",
		image: port,
		live: "https://vulpescode.netlify.app",
		repo: "https://github.com/vulpes231/myfxjournal",
	},
];

// 🛠️ Available Filters
const filters = ["All", "web app", "server app", "web3", "bots"];

const techColors = {
	React: { bg: "bg-blue-100", text: "text-blue-600" },
	"Node.js": { bg: "bg-green-100", text: "text-green-600" },
	MongoDB: { bg: "bg-green-50", text: "text-green-700" },
	"Charts.js": { bg: "bg-blue-50", text: "text-blue-700" },
	Solidity: { bg: "bg-gray-200", text: "text-gray-900" },
	Hardhat: { bg: "bg-purple-100", text: "text-purple-700" },
	Tailwind: { bg: "bg-teal-100", text: "text-teal-600" },
	Redux: { bg: "bg-purple-50", text: "text-purple-600" },
	Python: { bg: "bg-yellow-100", text: "text-yellow-700" },
	"React Native": { bg: "bg-blue-50", text: "text-blue-700" },
	Axios: { bg: "bg-cyan-100", text: "text-cyan-800" },
	FFmeg: { bg: "bg-yellow-100", text: "text-yellow-800" },
	Redis: { bg: "bg-red-100", text: "text-red-800" },
};

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredProjects =
		activeFilter === "All"
			? projects
			: projects.filter((p) => p.category === activeFilter);

	const location = useLocation();
	useEffect(() => {
		const path =
			location.pathname === "/" ? "Home" : location.pathname.slice(1);
		document.title = `Vulpescode - ${path}`;
	}, [location.pathname]);
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

				{/* Filter Buttons */}
				<motion.div
					variants={slideUp}
					className="flex flex-wrap justify-center gap-4"
				>
					{filters.map((filter) => (
						<button
							key={filter}
							onClick={() => setActiveFilter(filter)}
							className={`px-5 py-2 rounded-xl font-medium transition-all ${
								activeFilter === filter
									? "bg-[#16a34a] text-white shadow-md"
									: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:opacity-80"
							}`}
						>
							{filter}
						</button>
					))}
				</motion.div>

				{/* Project Grid */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{filteredProjects.map((project, idx) => (
						<motion.div
							key={idx}
							variants={child}
							className={`${styles.color.card} flex flex-col overflow-hidden`}
						>
							{/* Project Image */}
							<img
								src={project.image}
								alt={project.title}
								className="rounded-xl mb-4 object-cover w-full h-48"
							/>

							<div className="flex flex-col gap-3 flex-grow">
								<h3
									className={`${styles.font.subtitle} ${styles.color.heading}`}
								>
									{project.title}
								</h3>
								<p className={styles.font.body}>{project.description}</p>

								{/* Tech Stack Badges */}
								<div className="flex flex-wrap gap-2 mt-2">
									{project.tech.map((t, i) => {
										const colors = techColors[t] || {
											bg: "bg-gray-100",
											text: "text-gray-700",
										};
										return (
											<span
												key={i}
												className={`px-3 py-1 text-sm rounded-full ${colors.bg} ${colors.text}`}
											>
												{t}
											</span>
										);
									})}
								</div>
							</div>

							{/* CTAs */}
							<div className="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
								<a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
									className={`${styles.font.button} flex-1 text-center`}
								>
									Live Demo
								</a>
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 text-center text-base md:text-lg font-semibold px-5 py-2.5 rounded-xl shadow-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
								>
									Repo
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Projects;
