import React from "react";
import PropTypes from "prop-types";
import "./Pages.css";
import Page from "components/Page/Page";
import Pagination from "components/Pagination/Pagination";
import ErrorCard from "components/Error/Error";
import Loading from "components/Loading/Loading";
import NoResult from "components/NoResult/NoResult";
import Button from "components/Button/Button";
import fetchAmiboos from "store/actions/amiibo";
import { chunk_array } from "helpers/helpers";
import { setActivePage } from "store/actions/page";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch, connect } from "react-redux";

const Pages = ({ setPage, fetchAmiboos }) => {
	const dispatch = useDispatch();
	const amiibo = useSelector((state) => state.amiibo);
	const page = useSelector((state) => state.page);
	const { text, favorites } = useSelector((state) => state.filters);

	const { loading, error } = amiibo;
	let { data } = amiibo;
	const hasResult = !loading && data.length && !error;

	if (favorites) data = data.filter((amb) => amb.favorite);

	if (text.length) {
		data = data.filter(
			(amb) =>
				JSON.stringify(amb)
					.toLocaleLowerCase()
					.indexOf(text.toLocaleLowerCase()) !== -1
		);
	}

	const pages = hasResult && chunk_array(data, 5 * 2);

	return (
		<div className="page-content row w3-row-padding">
			{loading && <Loading />}
			{error && !loading && (
				<ErrorCard error={error}>
					<Button text="Reload" color="red" onClick={fetchAmiboos} />
				</ErrorCard>
			)}
			{hasResult &&
				pages.map(function (p, index) {
					return (
						<Page
							active={index + 1 === page.page}
							key={`"page-"${index}`}
							elements={p}
							index={index}
						></Page>
					);
				})}
			{hasResult && pages.length > 1 && (
				<Pagination
					setPage={setPage}
					pageActive={page.page}
					pageNumber={pages.length}
				/>
			)}

			{hasResult && !pages.length && <NoResult />}
		</div>
	);
};

Pages.propTypes = {
	setPage: PropTypes.func,
};

Pages.defaultProps = {};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ setPage: setActivePage, fetchAmiboos: fetchAmiboos },
		dispatch
	);
};

export default connect(null, mapDispatchToProps)(Pages);
