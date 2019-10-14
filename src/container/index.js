import { connect } from "react-redux";

import { requestDriverStandings, requestYearResults } from "../state/actions";

const mapStateToProps = state => ({
  standingsList: state.standingsList.data,
  isLoadingStandingsList: state.standingsList.isLoading,
  raceList: state.raceList.data,
  isLoadingRaceList: state.raceList.isLoading
});

const mapDispatchToProps = { requestDriverStandings, requestYearResults };

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
