import React from "react";
import PropTypes from "prop-types";
import "./Page.css";
import Card from "components/Card/Card";

const Page = ({ elements, active, index }) => (
	<div
		style={{ display: active ? "" : "none" }}
		className="Page"
		data-testid="Page"
	>
		{elements &&
			elements.map(function (ele, i) {
				return (
					<Card
						data={ele}
						position={index * 10 + i}
						key={`card-${i}`}
					></Card>
				);
			})}
	</div>
);

Page.propTypes = {
	elements: PropTypes.array,
	active: PropTypes.bool,
	index: PropTypes.number,
};

Page.defaultProps = {};

export default Page;
