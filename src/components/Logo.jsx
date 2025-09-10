import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/asset";

const Logo = () => {
	return (
		<Link to={"/"}>
			<img src={logo} alt="" className="w-[40px] md:w-[60px]" />
		</Link>
	);
};

export default Logo;
