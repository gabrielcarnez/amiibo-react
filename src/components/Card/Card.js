import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

import { Link } from "react-router-dom";

const Card = (props) => {
	const { data, position } = props;
	const { image, name, favorite, index } = data;

	return (
		<Link to={`detail/${index}`}>
			<div className="w3-third w3-container w3-margin-bottom content-card">
				{favorite && <i className="fa fa-star"></i>}
				<img
					loading="lazy"
					src={image}
					alt="Norway"
					className="w3-hover-opacity img-style"
				></img>
				<div className="w3-container w3-white">
					<p className="text-card">
						<b>{name}</b>
					</p>
				</div>
			</div>
		</Link>
	);
};

Card.propTypes = {
	data: PropTypes.shape({
		image: PropTypes.string,
		name: PropTypes.string,
		favorite: PropTypes.bool,
		index: PropTypes.number,
	}),
	position: PropTypes.number,
};

Card.defaultProps = {};

export default Card;
