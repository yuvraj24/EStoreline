import { FilterType } from "../actions/filterActions";

let initialState = {
  dataSource: [],
  loading: false,
};

export const filterReducer = (state = initialState, action) => {
  // alert(JSON.stringify(action))
  switch (action.type) {
    case FilterType.FETCH_FILTERS:
      return {
        ...state,
        loading: action.payload.loading,
      };
      break;

    case FilterType.FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        dataSource: action.payload.dataSource,
      };
      break;
      break;

    case FilterType.FETCH_FILTERS_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
      };
      break;

    default:
      return state;
      break;
  }
};
