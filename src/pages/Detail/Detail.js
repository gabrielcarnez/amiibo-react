import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";
import { Link } from "react-router-dom";

const Detail = () => (
	<div>
		<Link to="/">Back</Link>
		<div class="w3-row-padding w3-padding-16" id="about">
			<div class="w3-col m6">
				<img
					src="/w3images/avatar_g.jpg"
					alt="Me"
					style={{ width: 100 + "%" }}
				/>
			</div>
			<div class="w3-col m6">
				<img
					src="/w3images/me2.jpg"
					alt="Me"
					style={{ width: 100 + "%" }}
				/>
			</div>
		</div>

		<div
			class="w3-container w3-padding-large"
			style={{ marginBottom: 32 + "px" }}
		>
			<h4>
				<b>About Me</b>
			</h4>
			<p>
				Just me, myself and I, exploring the universe of unknownment. I
				have a heart of love and an interest of lorem ipsum and mauris
				neque quam blog. I want to share my world with you. Praesent
				tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
				porta lectus vitae, ultricies congue gravida diam non fringilla.
				Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
				condimentum, porta lectus vitae, ultricies congue gravida diam
				non fringilla.
			</p>
		</div>
	</div>
);

Detail.propTypes = {};

Detail.defaultProps = {};

export default Detail;
