import React from "react";
import { shallow } from "enzyme";

import RaceWinners from "../RaceWinners";

describe("RaceWinners", () => {
  it("renders without crashing", () => {
    const props = {
      raceListBySeason: {
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
          },
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
      },
      season: "2005",
      champion: "ALO"
    };
    const wrapper = shallow(<RaceWinners {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
