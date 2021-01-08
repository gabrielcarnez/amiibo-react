import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Index.css";
import Row from "../../components/Row/Row";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import fetchAmiboos from "../../store/actions/fetchAmiibos";

const Index = ({ amiiboList }) => {
	const dispatch = useDispatch();
	dispatch(fetchAmiboos());
	return <Row></Row>;
};

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
