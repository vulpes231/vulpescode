// variants.js
const fade = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const slideLeft = {
	initial: { x: 100, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: -100, opacity: 0 },
};

const slideUp = {
	initial: { y: 50, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -50, opacity: 0 },
};

const container = {
	hidden: { opacity: 0 },
	visible: (i = 1) => ({
		opacity: 1,
		transition: {
			staggerChildren: 0.03,
			delayChildren: 0.2 * i,
		},
	}),
};

const child = {
	hidden: {
		y: 20,
		opacity: 0,
		filter: "blur(4px)",
	},
	visible: {
		y: 0,
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			type: "spring",
			damping: 25,
			stiffness: 200,
		},
	},
};

export { slideLeft, slideUp, fade, child, container };
