import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = () => (
	<header id="portfolio">
		<a href="#">
			<img
				src="/w3images/avatar_g2.jpg"
				
				class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
			/>
		</a>
		<span
			class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
			onclick="w3_open()"
		>
			<i class="fa fa-bars"></i>
		</span>
		<div class="w3-container">
			<h1>
				<b>Amiibo</b>
			</h1>
			<div class="w3-section w3-bottombar w3-padding-16">
				<span class="w3-margin-right">Filter:</span>
				<input type="" name="" />
			</div>
		</div>
	</header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
