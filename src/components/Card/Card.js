import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

import { Link } from "react-router-dom";

const Card = (props) => {
	const { data } = props;
	const { amiiboSeries, character, gameSeries, name, release, type } = data;

	return (
		<Link to={`detail/${props.id}`}>
			<div class="w3-third w3-container w3-margin-bottom">
				<img
					loading="lazy"
					src={props.data.image}
					alt="Norway"
					style={{ height: 200 + "px" }}
					class="w3-hover-opacity"
				></img>
				<div class="w3-container w3-white">
					<p>
						<b>
							{character} - {name} - {gameSeries}
						</b>
					</p>
				</div>
			</div>
		</Link>
	);
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
