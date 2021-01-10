import React from "react";
import PropTypes from "prop-types";
import "./InputCheck.css";

const InputCheck = (props) => {
	const { event } = props;
	return (
		<input
			onChange={event}
			type="checkbox"
			name="input-search"
			className="input-search"
			placeholder="Mario"
		/>
	);
};

InputCheck.propTypes = {
	event: PropTypes.func,
};

InputCheck.defaultProps = {};

export default InputCheck;
