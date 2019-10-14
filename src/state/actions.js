import { DRIVER_STANDINGS, YEAR_RESULTS } from "./types";

export const requestDriverStandings = () => ({
  type: DRIVER_STANDINGS.REQUEST
});

export const receiveDriverStandingsResponse = ({ status, data }) => {
  if (status === 200) {
    const parseData = data =>
      data.MRData.StandingsTable.StandingsLists.map(standing => ({
        season: standing.season,
        driver: standing.DriverStandings[0].Driver
      }));

    return { type: DRIVER_STANDINGS.RESPONSE, payload: parseData(data) };
  }

  return {
    type: DRIVER_STANDINGS.RESPONSE,
    payload: { error: "driver_standings_failed" }
  };
};

export const requestYearResults = year => ({
  type: YEAR_RESULTS.REQUEST,
  payload: year
});

export const receiveYearResultsResponse = ({ status, data }) => {
  if (status === 200) {
    const parseData = data => ({
      season: data.MRData.RaceTable.season,
      races: data.MRData.RaceTable.Races.map(race => ({
        ...race.Results[0].Driver,
        date: race.date,
        circuitName: race.Circuit.circuitName
      }))
    });

    return { type: YEAR_RESULTS.RESPONSE, payload: parseData(data) };
  }

  return {
    type: YEAR_RESULTS.RESPONSE,
    payload: { error: "year_results_failed" }
  };
};
