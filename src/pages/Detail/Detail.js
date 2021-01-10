import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";
import { connect } from "react-redux";
import FullDetail from "../../components/FullDetail/FullDetail";
const Detail = (props) => {
	const { amiibo, position } = props;
	return (
		<div>
			<FullDetail data={{ ...amiibo, position }} />
		</div>
	);
};

Detail.propTypes = {
	amiibo: PropTypes.shape({
		amiiboSeries: PropTypes.string,
		character: PropTypes.string,
		gameSeries: PropTypes.string,
		head: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
		tail: PropTypes.string,
		type: PropTypes.string,
		favorite: PropTypes.bool,
	}),
	position: PropTypes.number,
};

Detail.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
	amiibo: state.fetchAmiibos.data.find(a => a.index == ownProps.match.params.id),
	position: parseInt(ownProps.match.params.id),
});

export default connect(mapStateToProps)(Detail);
