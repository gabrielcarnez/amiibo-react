import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import Filters from "../Filters/Filters";
import { withRouter, Link } from "react-router-dom";

const Header = (props) => {
	const { match } = props;
	const { isExact } = match;
	return (
		<header className="Header" id="portfolio">
			<div className="w3-container">
				<h1>
					<b>Amiibo Smile</b><br />
					<small className="description-header">An engine to search and find amiibos</small>
				</h1>
				<div className="w3-section w3-bottombar w3-padding-16 w3-bottombar-header"></div>
				{isExact && <Filters />}
				{!isExact && (
					<p className=" w3-center">
						<Link className="w3-container" to="/">
							<i className="fa fa-arrow-left"></i> Back
						</Link>
					</p>
				)}
			</div>
		</header>
	);
};

Header.propTypes = {
	match: PropTypes.object,
};

Header.defaultProps = {};

export default withRouter(Header);
