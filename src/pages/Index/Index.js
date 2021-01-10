import React from "react";
import PropTypes from "prop-types";
import "./Index.css";
import Pages from "../../components/Pages/Pages";
import fetchAmiboos from "../../store/actions/amiibo";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
const Index = (props) => {
	const amiiboList = useSelector((state) => state.fetchAmiibos.data);
	if (!amiiboList.length) {
		props.fetchAmiboos();
	}
	return <Pages></Pages>;
};

Index.propTypes = {
	fetchAmiibos: PropTypes.func,
};

Index.defaultProps = {};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchAmiboos: fetchAmiboos }, dispatch);
};

export default connect(null, mapDispatchToProps)(Index);

//export default Index;
