import { Cmd, getCmd, getModel } from "redux-loop";
import axios from "axios";

import * as act from "../actions";
import initialState from "../initialState";
import reducer from "../reducer";

describe.only("store", () => {
  it("returns initial state", () => {
    const actual = reducer(initialState, { type: "INIT" });
    const actualState = getModel(actual);
    const actualCommand = getCmd(actual);

    const expectedState = {
      standingsList: {
        isLoading: false,
        error: null,
        data: null
      },
      raceList: {
        isLoading: false,
        error: null,
        data: null
      }
    };
    const expectedCommand = Cmd.none;

    expect(actualState).toEqual(expectedState);
    expect(actualCommand).toEqual(expectedCommand);
  });

  describe("driver standings", () => {
    describe("when requesting", () => {
      it("updates the state with loading status and executes the request command", () => {
        const actual = reducer(initialState, act.requestDriverStandings());
        const actualState = getModel(actual);
        const actualCommand = getCmd(actual);

        const expectedState = {
          standingsList: {
            isLoading: true,
            error: null,
            data: null
          },
          raceList: {
            isLoading: false,
            error: null,
            data: null
          }
        };
        const expectedCommand = Cmd.run(axios, {
          args: [
            {
              method: "get",
              url:
                "https://ergast.com/api/f1/driverStandings/1.json?offset=55&limit=11"
            }
          ],
          successActionCreator: act.receiveDriverStandingsResponse
        });

        expect(actualState).toEqual(expectedState);
        expect(actualCommand).toEqual(expectedCommand);
      });
    });

    describe("when receive the API response", () => {
      it("parses the response and updates the state", () => {
        const data = {
          MRData: {
            xmlns: "http://ergast.com/mrd/1.4",
            series: "f1",
            url: "http://ergast.com/api/f1/driverstandings/1.json",
            limit: "11",
            offset: "55",
            total: "69",
            StandingsTable: {
              driverStandings: "1",
              StandingsLists: [
                {
                  season: "2005",
                  round: "19",
                  DriverStandings: [
                    {
                      position: "1",
                      positionText: "1",
                      points: "133",
                      wins: "7",
                      Driver: {
                        driverId: "alonso",
                        permanentNumber: "14",
                        code: "ALO",
                        url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                        givenName: "Fernando",
                        familyName: "Alonso",
                        dateOfBirth: "1981-07-29",
                        nationality: "Spanish"
                      },
                      Constructors: [
                        {
                          constructorId: "renault",
                          url:
                            "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                          name: "Renault",
                          nationality: "French"
                        }
                      ]
                    }
                  ]
                },
                {
                  season: "2006",
                  round: "18",
                  DriverStandings: [
                    {
                      position: "1",
                      positionText: "1",
                      points: "134",
                      wins: "7",
                      Driver: {
                        driverId: "alonso",
                        permanentNumber: "14",
                        code: "ALO",
                        url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                        givenName: "Fernando",
                        familyName: "Alonso",
                        dateOfBirth: "1981-07-29",
                        nationality: "Spanish"
                      },
                      Constructors: [
                        {
                          constructorId: "renault",
                          url:
                            "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                          name: "Renault",
                          nationality: "French"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        };
        const stateWithRequest = reducer(
          initialState,
          act.requestDriverStandings()
        );
        const stateWithResponse = reducer(
          getModel(stateWithRequest),
          act.receiveDriverStandingsResponse({
            status: 200,
            data
          })
        );
        const actualState = getModel(stateWithResponse);
        const actualCommand = getCmd(stateWithResponse);

        const expectedState = {
          standingsList: {
            isLoading: false,
            error: null,
            data: [
              {
                season: "2005",
                driver: {
                  driverId: "alonso",
                  permanentNumber: "14",
                  code: "ALO",
                  url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                  givenName: "Fernando",
                  familyName: "Alonso",
                  dateOfBirth: "1981-07-29",
                  nationality: "Spanish"
                }
              },
              {
                season: "2006",
                driver: {
                  driverId: "alonso",
                  permanentNumber: "14",
                  code: "ALO",
                  url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                  givenName: "Fernando",
                  familyName: "Alonso",
                  dateOfBirth: "1981-07-29",
                  nationality: "Spanish"
                }
              }
            ]
          },
          raceList: {
            isLoading: false,
            error: null,
            data: null
          }
        };
        const expectedCommand = Cmd.none;

        expect(actualState).toEqual(expectedState);
        expect(actualCommand).toEqual(expectedCommand);
      });
    });

    describe("when receive the API response with an error", () => {
      it("updates the state with the error type", () => {
        const stateWithRequest = reducer(
          initialState,
          act.requestDriverStandings()
        );
        const stateWithResponse = reducer(
          getModel(stateWithRequest),
          act.receiveDriverStandingsResponse({
            status: 400
          })
        );
        const actualState = getModel(stateWithResponse);
        const actualCommand = getCmd(stateWithResponse);

        const expectedState = {
          standingsList: {
            isLoading: false,
            error: "driver_standings_failed",
            data: null
          },
          raceList: {
            isLoading: false,
            error: null,
            data: null
          }
        };
        const expectedCommand = Cmd.none;

        expect(actualState).toEqual(expectedState);
        expect(actualCommand).toEqual(expectedCommand);
      });
    });
  });

  describe("year results", () => {
    describe("when requesting", () => {
      it("updates the state with loading status and executes the request command", () => {
        const actual = reducer(initialState, act.requestYearResults(2005));
        const actualState = getModel(actual);
        const actualCommand = getCmd(actual);

        const expectedState = {
          standingsList: {
            isLoading: false,
            error: null,
            data: null
          },
          raceList: {
            isLoading: true,
            error: null,
            data: null
          }
        };
        const expectedCommand = Cmd.run(axios, {
          args: [
            {
              method: "get",
              url: "https://ergast.com/api/f1/2005/results/1.json"
            }
          ],
          successActionCreator: act.receiveYearResultsResponse
        });

        expect(actualState).toEqual(expectedState);
        expect(actualCommand).toEqual(expectedCommand);
      });
    });

    describe("when receive the API response", () => {
      it("parses the response and updates the state", () => {
        const data2005 = {
          MRData: {
            xmlns: "http://ergast.com/mrd/1.4",
            series: "f1",
            url: "http://ergast.com/api/f1/2005/results/1.json",
            limit: "30",
            offset: "0",
            total: "19",
            RaceTable: {
              season: "2005",
              position: "1",
              Races: [
                {
                  season: "2005",
                  round: "1",
                  url:
                    "http://en.wikipedia.org/wiki/2005_Australian_Grand_Prix",
                  raceName: "Australian Grand Prix",
                  Circuit: {
                    circuitId: "albert_park",
                    url:
                      "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
                    circuitName: "Albert Park Grand Prix Circuit",
                    Location: {
                      lat: "-37.8497",
                      long: "144.968",
                      locality: "Melbourne",
                      country: "Australia"
                    }
                  },
                  date: "2005-03-06",
                  time: "14:00:00Z",
                  Results: [
                    {
                      number: "6",
                      position: "1",
                      positionText: "1",
                      points: "10",
                      Driver: {
                        driverId: "fisichella",
                        code: "FIS",
                        url:
                          "http://en.wikipedia.org/wiki/Giancarlo_Fisichella",
                        givenName: "Giancarlo",
                        familyName: "Fisichella",
                        dateOfBirth: "1973-01-14",
                        nationality: "Italian"
                      },
                      Constructor: {
                        constructorId: "renault",
                        url:
                          "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                        name: "Renault",
                        nationality: "French"
                      },
                      grid: "1",
                      laps: "57",
                      status: "Finished",
                      Time: {
                        millis: "5057336",
                        time: "1:24:17.336"
                      },
                      FastestLap: {
                        rank: "2",
                        lap: "55",
                        Time: {
                          time: "1:25.994"
                        },
                        AverageSpeed: {
                          units: "kph",
                          speed: "222.001"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        };
        const data2006 = {
          MRData: {
            xmlns: "http://ergast.com/mrd/1.4",
            series: "f1",
            url: "http://ergast.com/api/f1/2006/results/1.json",
            limit: "30",
            offset: "0",
            total: "18",
            RaceTable: {
              season: "2006",
              position: "1",
              Races: [
                {
                  season: "2006",
                  round: "1",
                  url: "http://en.wikipedia.org/wiki/2006_Bahrain_Grand_Prix",
                  raceName: "Bahrain Grand Prix",
                  Circuit: {
                    circuitId: "bahrain",
                    url:
                      "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                    circuitName: "Bahrain International Circuit",
                    Location: {
                      lat: "26.0325",
                      long: "50.5106",
                      locality: "Sakhir",
                      country: "Bahrain"
                    }
                  },
                  date: "2006-03-12",
                  time: "14:30:00Z",
                  Results: [
                    {
                      number: "1",
                      position: "1",
                      positionText: "1",
                      points: "10",
                      Driver: {
                        driverId: "alonso",
                        permanentNumber: "14",
                        code: "ALO",
                        url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                        givenName: "Fernando",
                        familyName: "Alonso",
                        dateOfBirth: "1981-07-29",
                        nationality: "Spanish"
                      },
                      Constructor: {
                        constructorId: "renault",
                        url:
                          "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                        name: "Renault",
                        nationality: "French"
                      },
                      grid: "4",
                      laps: "57",
                      status: "Finished",
                      Time: {
                        millis: "5386205",
                        time: "1:29:46.205"
                      },
                      FastestLap: {
                        rank: "3",
                        lap: "21",
                        Time: {
                          time: "1:32.534"
                        },
                        AverageSpeed: {
                          units: "kph",
                          speed: "210.551"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        };
        const stateWithRequest = reducer(
          initialState,
          act.requestYearResults(2005)
        );
        const stateWithResponse = reducer(
          getModel(stateWithRequest),
          act.receiveYearResultsResponse({
            status: 200,
            data: data2005
          })
        );
        const stateWithSecondResponse = reducer(
          getModel(stateWithResponse),
          act.receiveYearResultsResponse({
            status: 200,
            data: data2006
          })
        );

        const actualState = getModel(stateWithSecondResponse);
        const actualCommand = getCmd(stateWithSecondResponse);

        const expectedData = [
          {
            season: "2005",
            races: [
              {
                driverId: "fisichella",
                code: "FIS",
                url: "http://en.wikipedia.org/wiki/Giancarlo_Fisichella",
                givenName: "Giancarlo",
                familyName: "Fisichella",
                dateOfBirth: "1973-01-14",
                nationality: "Italian",
                circuitName: "Albert Park Grand Prix Circuit",
                date: "2005-03-06"
              }
            ]
          },
          {
            season: "2006",
            races: [
              {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish",
                circuitName: "Bahrain International Circuit",
                date: "2006-03-12"
              }
            ]
          }
        ];

        const expectedState = {
          standingsList: {
            isLoading: false,
            error: null,
            data: null
          },
          raceList: {
            isLoading: false,
            error: null,
            data: expectedData
          }
        };
        const expectedCommand = Cmd.none;

        expect(actualState).toEqual(expectedState);
        expect(actualCommand).toEqual(expectedCommand);
      });
    });

    describe("when receive the API response with an error", () => {
      it("updates the state with the error type", () => {
        const stateWithRequest = reducer(
          initialState,
          act.requestYearResults(2005)
        );
        const stateWithResponse = reducer(
          getModel(stateWithRequest),
          act.receiveYearResultsResponse({
            status: 400
          })
        );
        const actualState = getModel(stateWithResponse);
        const actualCommand = getCmd(stateWithResponse);

        const expectedState = {
          standingsList: {
            isLoading: false,
            error: null,
            data: null
          },
          raceList: {
            isLoading: false,
            error: "year_results_failed",
            data: null
          }
        };
        const expectedCommand = Cmd.none;

        expect(actualState).toEqual(expectedState);
        expect(actualCommand).toEqual(expectedCommand);
      });
    });
  });
});
