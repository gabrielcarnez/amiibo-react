import React from "react";
import PropTypes from "prop-types";
import "./Error.css";

const Error = ({ error, children }) => (
	<div className="w3-container w3-center">
		<h1>{error}</h1>
		{children}
	</div>
);

Error.propTypes = {
	error: PropTypes.string,
};

Error.defaultProps = {};

export default Error;
