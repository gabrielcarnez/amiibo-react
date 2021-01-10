import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DetailList.css";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../store/actions/amiibo";

const DetailList = (props) => {
	const dispatch = useDispatch();
	const {
		favorite,
		amiiboSeries,
		character,
		gameSeries,
		name,
		release,
		position,
	} = props;
	const [isFavourite, updateFavorite] = useState(favorite);
	return (
		<div
			className="w3-container w3-padding-large"
			style={{ marginBottom: 32 + "px" }}
		>
			<h2
				onClick={() => {
					dispatch(setFavorite(position));
					updateFavorite(!isFavourite);
				}}
			>
				<i
					className={
						isFavourite
							? "icon-fav fa fa-star"
							: "icon-fav fa fa-star-o"
					}
				></i>{" "}
				<b>{name}</b>
			</h2>
			<ul>
				<li>Amiibo Series: {amiiboSeries}</li>
				<li>character: {character}</li>
				<li>gameSeries: {gameSeries}</li>
				<li>
					Pelease:
					<ul>
						{release &&
							Object.entries(release).map(
								([key, value], index) => (
									<li key={`release-${index}`}>
										{key}: {value || "--"}
									</li>
								)
							)}
					</ul>
				</li>
			</ul>
		</div>
	);
};

DetailList.propTypes = {
	data: PropTypes.shape({
		amiiboSeries: PropTypes.string,
		character: PropTypes.string,
		gameSeries: PropTypes.string,
		head: PropTypes.string,
		name: PropTypes.string,
		favorite: PropTypes.bool,
		position: PropTypes.number,
		release: PropTypes.array,
	}),
};

DetailList.defaultProps = {};

export default DetailList;
