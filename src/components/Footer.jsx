import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { fade } from "../styles/variants";
import { styles } from "../styles/styles";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ name: "github", url: "https://github.com", icon: "🚀" },
		{ name: "linkedin", url: "https://linkedin.com", icon: "💼" },
		{ name: "twitter", url: "https://twitter.com", icon: "🐦" },
		{ name: "email", url: "mailto:hello@example.com", icon: "✉️" },
	];

	const quickLinks = [
		{ name: "home", href: "#home" },
		{ name: "about", href: "#about" },
		{ name: "projects", href: "#projects" },
		{ name: "contact", href: "#contact" },
	];

	return (
		<motion.footer
			className={`${styles.color.background} border-t ${styles.color.border} py-12`}
			variants={fade}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
		>
			<div className="max-w-6xl mx-auto px-6">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand Section */}
					<div className="space-y-4">
						<Logo />
						<p className={`${styles.font.small} max-w-xs`}>
							Crafting beautiful digital experiences with modern technologies.
							Let's build something amazing together.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className={`${styles.font.subtitle} ${styles.color.heading}`}>
							Quick Links
						</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className={`${styles.font.small} ${styles.color.secondary} hover:${styles.color.primary} transition-colors duration-200`}
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Links */}
					<div className="space-y-4">
						<h3 className={`${styles.font.subtitle} ${styles.color.heading}`}>
							Let's Connect
						</h3>
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`${styles.color.card} w-12 h-12 rounded-xl flex items-center justify-center 
                                    hover:scale-110 transition-transform duration-200 group`}
									aria-label={social.name}
								>
									<span className="text-xl group-hover:scale-110 transition-transform duration-200">
										{social.icon}
									</span>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div
					className={`border-t ${styles.color.border} pt-6 flex flex-col md:flex-row justify-between items-center`}
				>
					<p className={`${styles.font.small} ${styles.color.secondary}`}>
						© {currentYear} Vulpescode. All rights reserved.
					</p>
					<p
						className={`${styles.font.small} ${styles.color.secondary} mt-2 md:mt-0`}
					>
						Built with ❤️ using React & Tailwind
					</p>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
