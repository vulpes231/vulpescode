const styles = {
	font: {
		hero: "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight",
		// Big hero headline (mobile → desktop scaling)

		title: "text-2xl md:text-3xl lg:text-4xl font-bold leading-snug",
		// Section titles

		subtitle: "text-lg md:text-xl lg:text-2xl font-medium leading-relaxed",
		// Subtitles or section headers

		body: "text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed",
		// Normal paragraph text

		small: "text-sm md:text-base text-gray-500 dark:text-gray-400 leading-snug",
		// Small notes / captions

		link: "text-base md:text-lg font-medium text-[#16a34a] dark:text-[#a3e635] hover:underline",
		// Links styled with brand green

		button: "text-base md:text-lg font-semibold tracking-wide",
		// Button text
	},
	section: "p-6 w-full mt-[70px] max-w-5xl mx-auto",
	color: {
		background: "bg-[#f9fafb] dark:bg-[#0f172a]", // light / dark
		heading: "text-[#111827] dark:text-[#f1f5f9]", // heading text
		body: "text-[#334155] dark:text-[#cbd5e1]", // body text
		secondary: "text-[#475569] dark:text-[#94a3b8]", // subtext
		primary: "text-[#16a34a] dark:text-[#a3e635]", // brand green
		accent: "text-[#2563eb] dark:text-[#38bdf8]", // accent blue
		border: "border-[#e2e8f0] dark:border-[#1e293b]", // borders
		card: "bg-white dark:bg-[#1e293b]", // card bg
		ctaBg: "bg-gradient-to-r from-[#22c55e] to-[#16a34a]", // CTA stays green
		ctaText: "text-white", // CTA text
	},
};

export { styles };
