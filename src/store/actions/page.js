export const SET_PAGE = "SET_PAGE";

export const setActivePage = (Page) => {
	return {
		type: SET_PAGE,
		payload: Page,
	};
};
