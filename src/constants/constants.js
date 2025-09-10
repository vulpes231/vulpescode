import {
	bot,
	logo,
	tail,
	css,
	html,
	js,
	mongo,
	node,
	react,
	rn,
} from "../assets/asset";

const navLinks = [
	{
		id: "home",
		title: "home",
	},
	{
		id: "about",
		title: "about",
	},
	{
		id: "projects",
		title: "projects",
	},
	{
		id: "contact",
		title: "contact",
	},
	// {
	// 	id: "resume",
	// 	title: "Resume",
	// 	path: "https://www.dropbox.com/scl/fi/kh24i8ap5lfndihs92tdk/resumebnov.pdf?rlkey=o7x74k289ryux8p2hjrhlumwj&st=g46n58tj&dl=0",
	// },
];

const experiences = [
	{
		id: 1,
		position: "Software Developer",
		company: "@Freelance",
		date: "July 2023 - Present",
		achievements: [
			"Collaborated with a cross-functional team to develop a custom ERC-20 governance token from scratch. Designed and implemented the backend infrastructure using Hardhat and Solidity, ensuring security and functionality",
			"Created a user-friendly frontend interface using JavaScript, HTML, and CSS for token holders to interact with the governance platform",
			"Implemented smart contract functionalities for voting, proposals, and token management",
			"Successfully completed the project on time, meeting all client requirements and expectations",
		],
	},
	{
		id: 2,
		position: "Software Developer",
		company: "@Vastcoin Ltd",
		date: "March 2023 - July 2023",
		achievements: [
			"Developed REST APIs for an inventory web application, enabling the company to efficiently manage and track employees, and products thereby boosting the company overall productivity",
			"constructed supplementary web pages and components for an existing web application, enhancing user interaction and overall usability",
			"Developed a fullstack collaborative web application that facilitates seamless teamwork among employees, streamlining the process of addressing user complaints by grouping staff and assigning them to customer tickets.",
		],
	},
	{
		id: 3,
		position: "Software Developer",
		company: "@Freelance",
		date: "Jan 2023 - Feb 2023",
		achievements: [
			"contributed to an existing web application by revamping the landing page to enhance usability and accessibilty",
			"resolved an OTP delivery issue with the server's mailer, ensuring that newly registered users receive OTP in their emails as intended",
		],
	},
];

const projects = [
	{
		id: 1,
		img: bot,
		title:
			"Automated Twitter DM Bot: Engaging Users Based on Keyword Mentions and Followed Accounts",
		tools: ["Python", "X-API", "Firebase"],
		demo_url: "",
		repo_url: "https://github.com/vulpes231/twitterbot",
	},
];

const aboutArticles = [
	{
		id: 1,
		title: "What I Do",
		content: `My primary focus is on web development and mobile app development.
    I enjoy working with JavaScript, React, Nodejs, ReactNative,
    MongoDB and I'm always eager to learn new technologies to stay at
    the forefront of the ever-evolving tech landscape.`,
	},
	{
		id: 2,
		title: "What I Believe",
		content: `I'm a firm believer in the importance of clean and maintainable
    code. I'm dedicated to writing software that not only solves
    problems but is also easy to understand, maintain, and scale. I
    thrive in collaborative environments and enjoy working in
    cross-functional teams to achieve the best results.`,
	},
	{
		id: 3,
		title: "What Drives Me",
		content: ` I'm fueled by a desire to continuously improve and learn. Whether
    it's through personal projects, online courses, or industry
    events, I'm always seeking new opportunities to expand my skill
    set and stay up-to-date with the latest developments in
    technology.`,
	},
];

const text =
	"I’m a results-driven Software Engineer with 4+ years of experience building scalable web applications and smart contract solutions. Skilled in the MERN stack, JavaScript, Python, and Solidity, I specialize in creating seamless, user-focused experiences across fintech, e-commerce, and crypto projects. Passionate about clean code, performance optimization, and solving real-world problems with elegant technical solutions.";

const socialLinks = [
	{
		href: "https://wa.me/2347043978929",
		color: "hover:text-green-500",
	},
	{
		href: "https://twitter.com/vulpes26",
		color: "hover:text-cyan-500",
	},
	{
		href: "https://www.linkedin.com/in/olayinka26/",
		color: "hover:text-blue-500",
	},
	{
		href: "https://github.com/vulpes231",
		color: "hover:text-white",
	},
];

const techStack = [
	{ title: "HTML", pic: html },
	{ title: "CSS", pic: css },
	{ title: "Javascript", pic: js },
	{ title: "React", pic: react },
	{ title: "React Native", pic: rn },
	{ title: "Node.js", pic: node },
	{ title: "MongoDB", pic: mongo },
	{ title: "Tailwind CSS", pic: tail },
];

const getAccessToken = () => {
	return sessionStorage.getItem("token") || null;
};

const devServer = ``;
const liveServer = ``;

export {
	navLinks,
	experiences,
	projects,
	aboutArticles,
	text,
	socialLinks,
	techStack,
	getAccessToken,
	devServer,
	liveServer,
};
