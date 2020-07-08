import { connect } from "react-redux";
import { FilterView } from "../components/FilterView";

function mapStateToProps(state) {
  return {
    dataSource: state.dataSource,
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(FilterView);
