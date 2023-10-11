import React from "react";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button {...props}>{props.value}</button>;
};

export default Button;
