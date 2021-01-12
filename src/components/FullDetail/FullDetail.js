import React from "react";
import PropTypes from "prop-types";
import "./FullDetail.css";
import DetailList from "components/DetailList/DetailList";

const FullDetail = ({ data }) => {
	const {
		image,
		amiiboSeries,
		character,
		gameSeries,
		name,
		release,
		type,
		position,
		favorite,
	} = data;
	return (
		<div className="w3-row-padding w3-padding-16" id="about">
			<div className="w3-col m6">
				<img src={image} alt="Me" className="img-style-detail" />
			</div>
			<div className="w3-col m6">
				<DetailList
					{...{
						amiiboSeries,
						character,
						gameSeries,
						name,
						release,
						type,
						position,
						favorite,
					}}
				/>
			</div>
		</div>
	);
};

FullDetail.propTypes = {
	data: PropTypes.shape({
		amiiboSeries: PropTypes.string,
		character: PropTypes.string,
		gameSeries: PropTypes.string,
		head: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
		tail: PropTypes.string,
		type: PropTypes.string,
		favorite: PropTypes.bool,
		position: PropTypes.number,
	}),
};

FullDetail.defaultProps = {};

export default FullDetail;
