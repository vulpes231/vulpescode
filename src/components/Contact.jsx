import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { fade, slideUp } from "../styles/variants";
import Errormodal from "./Error";
import Success from "./Success";
import Loader from "./Loader";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		for (const key in form) {
			if (form[key] === "") {
				setError(`${key} is required!`);
				return;
			}
		}
		console.log(form); // Replace with API call
		setSubmitted(true);
		setForm({ name: "", email: "", message: "" });
	};

	useEffect(() => {
		let timeout;
		if (error) {
			timeout = setTimeout(() => {
				setError("");
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [error]);

	return (
		<motion.section
			id="contact"
			className={`${styles.section} ${styles.color.background} flex justify-center py-12`}
			variants={fade}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<motion.div
				className={`w-full max-w-2xl p-6 backdrop-blur-md rounded-2xl shadow-md transition-colors ${styles.color.card}`}
				variants={slideUp}
			>
				<h2 className={`${styles.font.title} text-center mb-2`}>Contact Me</h2>
				<p className={`${styles.font.body} text-center mb-6`}>
					Send me a message and I’ll get back to you as soon as possible.
				</p>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={form.name}
						onChange={handleChange}
						// required
						className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-[#334155]/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						value={form.email}
						onChange={handleChange}
						// required
						className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-[#334155]/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						value={form.message}
						onChange={handleChange}
						// required
						rows={5}
						className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-[#334155]/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<button type="submit" className={`${styles.font.button} w-full mt-2`}>
						{submitted ? "Sent!" : "Send Message"}
					</button>
				</form>
			</motion.div>
			{error && (
				<Errormodal error={error} isOpen={true} onClose={() => setError("")} />
			)}
			{submitted && (
				<Success
					successText={"Form submitted."}
					isOpen={true}
					onClose={() => setSubmitted(false)}
				/>
			)}
			{loading && <Loader loadingText="Submitting" isOpen={true} />}
		</motion.section>
	);
};

export default Contact;
