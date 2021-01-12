import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, color, text }) => (
	<button onClick={() => onClick()} className={`w3-button w3-${color}`}>
		{text}
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func,
	color: PropTypes.string,
};

Button.defaultProps = {
	onClick: () => {},
	color: "black",
};

export default Button;
