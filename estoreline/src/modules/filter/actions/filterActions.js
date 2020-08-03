import { getProductFilters } from "../../../api/ApiController";

export const fetchFilters = () => ({
  type: FilterType.FETCH_FILTERS,
  payload: { loading: true },
});

export const fetchFiltersSuccess = (data) => ({
  type: FilterType.FETCH_FILTERS_SUCCESS,
  payload: { loading: false, dataSource: data },
});

export const fetchFiltersFailure = () => ({
  type: FilterType.FETCH_FILTERS_FAILURE,
  payload: { loading: false },
});

export const FilterType = {
  FETCH_FILTERS: "FETCH_FILTERS",
  FETCH_FILTERS_SUCCESS: "FETCH_FILTERS_SUCCESS",
  FETCH_FILTERS_FAILURE: "FETCH_FILTERS_FAILURE",
};

export function fetchProductFilters() {
  return async function (dispatch) {
    dispatch(fetchFilters());
    let result = await getProductFilters();
    if (result.status === 200) {
      dispatch(fetchFiltersSuccess(result.data));
    } else {
      dispatch(fetchFiltersFailure());
    }
  };
}
