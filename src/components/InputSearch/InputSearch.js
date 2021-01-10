import React from "react";
import PropTypes from "prop-types";
import "./InputSearch.css";

const InputSearch = (props) => {
	const { event, value } = props;
	return (
		<input
			onChange={event}
			type="text"
			name="input-search"
			className="input-search"
			placeholder="Mario"
			value={value}
		/>
	);
};

InputSearch.propTypes = {
	event: PropTypes.func,
	value: PropTypes.string,
};

InputSearch.defaultProps = {};

export default InputSearch;
