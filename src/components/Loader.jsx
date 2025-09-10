import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react"; // Lucide spinner icon
import { styles } from "../styles/styles";

const Loader = ({ loadingText = "Loading...", isOpen }) => {
	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-white/20 backdrop-blur-sm"
			>
				<motion.div
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0.8 }}
					className={`${styles.color.card} flex flex-col items-center gap-3 p-6 rounded-2xl shadow-lg`}
				>
					<Loader2 className="w-10 h-10 text-[#16a34a] animate-spin" />
					<p className={`${styles.font.body} text-center text-[#16a34a]`}>
						{loadingText}
					</p>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Loader;
