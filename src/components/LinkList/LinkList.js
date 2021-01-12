import React from "react";
import PropTypes from "prop-types";
import "./LinkList.css";

const LinkList = ({ list, title }) => (
	<div className="LinkList" data-testid="LinkList">
		{title && <h3>{title}</h3>}
		{list &&
			list.map(function (el, index) {
				return (
					<React.Fragment key={`link-${index}`}>
						<a
							href={el.link}
							target="_blank"
							className="w3-large"
							rel="noopener noreferrer"
						>
							{el.text}
						</a>
						<br />
					</React.Fragment>
				);
			})}
	</div>
);

LinkList.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string,
		})
	),
	title: PropTypes.string,
};

LinkList.defaultProps = {
	title: "",
};

export default LinkList;
