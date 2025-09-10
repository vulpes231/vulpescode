import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { styles } from "../styles/styles";
import { fade, slideUp } from "../styles/variants";

const Success = ({ successText, isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				className="fixed top-5 right-5 z-50"
			>
				<div
					className={`${styles.color.card} flex items-center gap-3 p-4 rounded-xl shadow-lg border border-green-400`}
				>
					<CheckCircle className="w-6 h-6 text-green-600" />
					<p className={`${styles.font.body} text-green-700`}>{successText}</p>
					{onClose && (
						<button
							onClick={onClose}
							className="ml-auto text-green-600 hover:text-green-800 font-bold"
						>
							X
						</button>
					)}
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Success;
