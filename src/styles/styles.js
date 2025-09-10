const styles = {
	font: {
		hero:
			"text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight " +
			"text-[#111827] dark:text-[#f1f5f9]",
		// Big hero headline

		title:
			"text-2xl md:text-3xl lg:text-4xl font-bold leading-snug " +
			"text-[#111827] dark:text-[#f1f5f9]",
		// Section titles

		subtitle:
			"text-lg md:text-xl lg:text-2xl font-medium leading-relaxed " +
			"text-[#334155] dark:text-[#cbd5e1]",
		// Subtitles or section headers

		body:
			"text-base md:text-lg text-[#334155] dark:text-[#cbd5e1] leading-relaxed " +
			"max-w-prose",
		// Normal paragraph text (with readable line length)

		small:
			"text-sm md:text-base text-[#475569] dark:text-[#94a3b8] leading-snug",
		// Captions, notes, meta info

		link:
			"text-base md:text-lg font-medium text-[#16a34a] dark:text-[#a3e635] " +
			"relative group transition-colors duration-300 capitalize " +
			"hover:text-[#15803d] dark:hover:text-[#84cc16] " +
			"after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
			"after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 " +
			"group-hover:after:w-full",
		// Nav/inline links with smooth underline animation

		button:
			"text-base md:text-lg font-semibold tracking-wide " +
			"text-white px-5 py-2.5 rounded-xl shadow-md " +
			"bg-gradient-to-r from-[#22c55e] to-[#16a34a] " +
			"hover:opacity-90 active:scale-[0.97] transition-all duration-200",
		// CTA buttons with subtle active press effect
	},

	section: "p-6 w-full mt-[70px] max-w-6xl mx-auto",

	color: {
		background: "bg-[#f9fafb] dark:bg-[#1e293b]", // global section bg
		heading: "text-[#111827] dark:text-[#f1f5f9]", // heading text
		body: "text-[#334155] dark:text-[#cbd5e1]", // body text
		secondary: "text-[#475569] dark:text-[#94a3b8]", // muted text
		primary: "text-[#16a34a] dark:text-[#a3e635]", // brand green
		accent: "text-[#2563eb] dark:text-[#38bdf8]", // brand blue
		warning: "text-[#f59e0b] dark:text-[#facc15]", // yellow warning
		error: "text-[#dc2626] dark:text-[#f87171]", // red error
		success: "text-[#16a34a] dark:text-[#4ade80]", // green success
		border: "border-[#e2e8f0] dark:border-[#1e293b]", // borders
		card: "bg-white dark:bg-[#0f172a]/80 shadow-md rounded-2xl p-6 backdrop-blur-sm transition-colors",

		// cards w/ padding + transition
		ctaBg: "bg-gradient-to-r from-[#22c55e] to-[#16a34a]",
		ctaText: "text-white font-semibold",
	},
};

export { styles };
