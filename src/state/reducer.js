import { Cmd, loop } from "redux-loop";
import axios from "axios";
import flow from "lodash/fp/flow";
import set from "lodash/fp/set";

import {
  receiveDriverStandingsResponse,
  receiveYearResultsResponse
} from "./actions";
import { DRIVER_STANDINGS, YEAR_RESULTS } from "./types";

import initialState from "./initialState";

export default function car(state = initialState, { type, payload }) {
  switch (type) {
    case DRIVER_STANDINGS.REQUEST:
      return loop(
        set("standingsList.isLoading", true, state),
        Cmd.run(axios, {
          args: [
            {
              method: "get",
              url:
                "https://ergast.com/api/f1/driverStandings/1.json?offset=55&limit=11"
            }
          ],
          successActionCreator: receiveDriverStandingsResponse
        })
      );

    case DRIVER_STANDINGS.RESPONSE: {
      if (payload.error) {
        return loop(
          flow(
            set("standingsList.isLoading", false),
            set("standingsList.error", payload.error),
            set("standingsList.data", null)
          )(state),
          Cmd.none
        );
      }

      return loop(
        flow(
          set("standingsList.isLoading", false),
          set("standingsList.error", null),
          set("standingsList.data", payload)
        )(state),
        Cmd.none
      );
    }

    case YEAR_RESULTS.REQUEST:
      return loop(
        set("raceList.isLoading", true, state),
        Cmd.run(axios, {
          args: [
            {
              method: "get",
              url: `https://ergast.com/api/f1/${payload}/results/1.json`
            }
          ],
          successActionCreator: receiveYearResultsResponse
        })
      );

    case YEAR_RESULTS.RESPONSE: {
      if (payload.error) {
        return loop(
          flow(
            set("raceList.isLoading", false),
            set("raceList.error", payload.error),
            set("raceList.data", null)
          )(state),
          Cmd.none
        );
      }

      const raceList = state.raceList.data
        ? [...state.raceList.data, payload]
        : [payload];

      return loop(
        flow(
          set("raceList.isLoading", false),
          set("raceList.error", null),
          set("raceList.data", raceList)
        )(state),
        Cmd.none
      );
    }

    default:
      return loop(state, Cmd.none);
  }
}
