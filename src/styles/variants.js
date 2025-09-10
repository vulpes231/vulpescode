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

export { slideLeft, slideUp, fade };
