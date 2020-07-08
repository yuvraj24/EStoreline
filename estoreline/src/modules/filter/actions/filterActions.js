export const fetchFilters = () => ({
  type: FilterType.FETCH_FILTERS,
  payload: { loading: true },
});

export const fetchFiltersSuccess = (data) => ({
  type: FilterType.FETCH_FILTERS_SUCCESS,
  payload: { loading: false, data : data },
});

export const fetchFiltersFailure = () => ({
  type: FilterType.FETCH_FILTERS_FAILURE,
  payload: { loading: false },
});

export const FilterType = {
    FETCH_FILTERS : "FETCH_FILTERS",
    FETCH_FILTERS_SUCCESS : "FETCH_FILTERS_SUCCESS",
    FETCH_FILTERS_FAILURE : "FETCH_FILTERS_FAILURE"
}
