import React from "react";
import PropTypes from "prop-types";
import "./InputCheck.css";

const InputCheck = ({ event, checked }) => (
	<input
		onChange={event}
		type="checkbox"
		name="input-search"
		checked={checked}
		className="input-search"
		placeholder="Mario"
	/>
);

InputCheck.propTypes = {
	event: PropTypes.func,
	checked: PropTypes.bool,
};

InputCheck.defaultProps = {};

export default InputCheck;
