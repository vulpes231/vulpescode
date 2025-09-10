import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { slideUp, container, child } from "../styles/variants";

const skills = [
	{ label: "MERN Stack", color: styles.color.primary },
	{ label: "JavaScript", color: styles.color.accent },
	{ label: "Python", color: styles.color.success },
	{ label: "Solidity", color: styles.color.warning },
	{ label: "React Native", color: styles.color.warning },
	{ label: "Web3 & Smart Contracts", color: styles.color.accent },
	{ label: "API Integration", color: styles.color.success },
	{ label: "UI/UX & Responsive Design", color: styles.color.primary },
	{ label: "Agile Collaboration", color: styles.color.secondary },
];

const About = () => {
	return (
		<section
			id="about"
			className={`${styles.section} ${styles.color.background}`}
		>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
				className="flex flex-col gap-12"
			>
				{/* Section Title */}
				<motion.h2
					variants={slideUp}
					className={`${styles.font.title} text-center`}
				>
					About Me
				</motion.h2>

				{/* About Card */}
				<motion.div variants={slideUp} className={styles.color.card}>
					<motion.p variants={child} className={styles.font.body}>
						I’m a{" "}
						<span className={styles.color.primary}>Software Engineer</span> with
						4+ years of experience building scalable web applications and{" "}
						<span className={styles.color.accent}>
							smart contract solutions
						</span>
						. Skilled in the MERN stack, JavaScript, Python, and Solidity, I’ve
						delivered impactful projects in fintech, e-commerce, and crypto.
					</motion.p>

					<motion.p variants={child} className={`${styles.font.body} mt-4`}>
						I enjoy working on{" "}
						<span className={styles.color.success}>
							user-focused interfaces
						</span>
						, optimizing performance, and solving real-world problems with
						elegant technical solutions. Beyond coding, I value{" "}
						<span className={styles.color.warning}>collaboration</span>, clean
						code, and lifelong learning.
					</motion.p>
				</motion.div>

				{/* Skills Grid */}
				<motion.div
					variants={slideUp}
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
				>
					{skills.map((skill, idx) => (
						<motion.div
							key={idx}
							variants={child}
							className={`${styles.color.card} flex items-center justify-center p-4 hover:scale-105 transition-transform`}
						>
							<span className={`${styles.font.small} ${skill.color}`}>
								{skill.label}
							</span>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
