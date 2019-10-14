import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Champions from "./Champions";

const Main = styled.main`
  margin: auto;
  max-width: 1024px;
`;

const Content = ({
  standingsList,
  isLoadingStandingsList,
  raceList,
  isLoadingRaceList,
  requestDriverStandings,
  requestYearResults
}) => {
  useEffect(() => {
    requestDriverStandings();
  }, [requestDriverStandings]);

  return (
    <Main>
      <h1>Formula 1 world champions</h1>
      {isLoadingStandingsList ? (
        <p>is loading data...</p>
      ) : standingsList ? (
        <Champions
          standingsList={standingsList}
          raceList={raceList}
          requestYearResults={requestYearResults}
        />
      ) : (
        <>
          <p>dont have standings data</p>
          <button onClick={() => requestDriverStandings()}>
            request standings data
          </button>
        </>
      )}
    </Main>
  );
};

Content.propTypes = {
  standingsList: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string.isRequired,
      driver: PropTypes.shape({
        driverId: PropTypes.string.isRequired,
        permanentNumber: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        givenName: PropTypes.string.isRequired,
        familyName: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired
      })
    })
  ),
  raceList: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string.isRequired,
      races: PropTypes.arrayOf(
        PropTypes.shape({
          driverId: PropTypes.string.isRequired,
          code: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          givenName: PropTypes.string.isRequired,
          familyName: PropTypes.string.isRequired,
          dateOfBirth: PropTypes.string.isRequired,
          nationality: PropTypes.string.isRequired,
          circuitName: PropTypes.string,
          date: PropTypes.string
        })
      ).isRequired
    })
  ),
  isLoadingStandingsList: PropTypes.bool.isRequired,
  isLoadingRaceList: PropTypes.bool.isRequired,
  requestDriverStandings: PropTypes.func.isRequired,
  requestYearResults: PropTypes.func.isRequired
};

export default Content;
