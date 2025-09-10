import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";
import { styles } from "../styles/styles";
import { fade, slideUp } from "../styles/variants";

const Errormodal = ({ error, isOpen, onClose }) => {
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
					className={`${styles.color.card} flex items-center gap-3 p-4 rounded-xl shadow-lg border border-red-400`}
				>
					<XCircle className="w-6 h-6 text-red-600" />
					<p className={`${styles.font.body} text-red-700`}>{error}</p>
					<button
						onClick={onClose}
						className="ml-auto text-red-600 hover:text-red-800 font-bold"
					>
						X
					</button>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Errormodal;
