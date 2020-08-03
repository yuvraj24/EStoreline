import { connect } from "react-redux";
import { FilterView } from "../components/FilterView";
import {
  fetchFilters,
  fetchFiltersFailure,
  fetchFiltersSuccess,
  fetchProductFilters,
} from "../actions/filterActions";

const mapStateToProps = (state) => ({
  dataSource: state.filter.dataSource,
  loading: state.filter.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilters: () => dispatch(fetchProductFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterView);
