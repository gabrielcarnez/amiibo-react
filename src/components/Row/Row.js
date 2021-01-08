import React from "react";
import PropTypes from "prop-types";
import "./Row.css";
import { useSelector } from "react-redux";
import fetchAmiboos from "../../store/actions/fetchAmiibos";
import Card from "../Card/Card";
import ErrorCard from "../Error/Error";
import Loading from "../Loading/Loading";

const Row = (props) => {
	const amiibo = useSelector((state) => state.fetchAmiibos);
	const { loading, data, error } = amiibo;
	const hasResult = !loading && data.length && !error;
	console.log(!loading, data.length, !error)
	return (
		<div class="w3-row-padding">
		
			{loading && <Loading />}
			{error && <ErrorCard />}
			{hasResult &&
				data.map(function (amibbo, index) {
					return <Card data={amibbo} key={`"index-"${index}`} />;
				})}


		</div>
	);
};

Row.propTypes = {};

Row.defaultProps = {};

export default Row;
