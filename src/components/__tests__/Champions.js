import React from "react";
import { shallow } from "enzyme";

import Champions from "../Champions";

describe("Champions", () => {
  it("renders without crashing", () => {
    const props = {
      standingsList: [
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
        },
        {
          season: "2007",
          driver: {
            driverId: "raikkonen",
            permanentNumber: "7",
            code: "RAI",
            url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
            givenName: "Kimi",
            familyName: "Räikkönen",
            dateOfBirth: "1979-10-17",
            nationality: "Finnish"
          }
        },
        {
          season: "2008",
          driver: {
            driverId: "hamilton",
            permanentNumber: "44",
            code: "HAM",
            url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
            givenName: "Lewis",
            familyName: "Hamilton",
            dateOfBirth: "1985-01-07",
            nationality: "British"
          }
        },
        {
          season: "2009",
          driver: {
            driverId: "button",
            permanentNumber: "22",
            code: "BUT",
            url: "http://en.wikipedia.org/wiki/Jenson_Button",
            givenName: "Jenson",
            familyName: "Button",
            dateOfBirth: "1980-01-19",
            nationality: "British"
          }
        },
        {
          season: "2010",
          driver: {
            driverId: "vettel",
            permanentNumber: "5",
            code: "VET",
            url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
            givenName: "Sebastian",
            familyName: "Vettel",
            dateOfBirth: "1987-07-03",
            nationality: "German"
          }
        },
        {
          season: "2011",
          driver: {
            driverId: "vettel",
            permanentNumber: "5",
            code: "VET",
            url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
            givenName: "Sebastian",
            familyName: "Vettel",
            dateOfBirth: "1987-07-03",
            nationality: "German"
          }
        },
        {
          season: "2012",
          driver: {
            driverId: "vettel",
            permanentNumber: "5",
            code: "VET",
            url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
            givenName: "Sebastian",
            familyName: "Vettel",
            dateOfBirth: "1987-07-03",
            nationality: "German"
          }
        },
        {
          season: "2013",
          driver: {
            driverId: "vettel",
            permanentNumber: "5",
            code: "VET",
            url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
            givenName: "Sebastian",
            familyName: "Vettel",
            dateOfBirth: "1987-07-03",
            nationality: "German"
          }
        },
        {
          season: "2014",
          driver: {
            driverId: "hamilton",
            permanentNumber: "44",
            code: "HAM",
            url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
            givenName: "Lewis",
            familyName: "Hamilton",
            dateOfBirth: "1985-01-07",
            nationality: "British"
          }
        },
        {
          season: "2015",
          driver: {
            driverId: "hamilton",
            permanentNumber: "44",
            code: "HAM",
            url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
            givenName: "Lewis",
            familyName: "Hamilton",
            dateOfBirth: "1985-01-07",
            nationality: "British"
          }
        }
      ],
      raceList: [
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
              nationality: "Italian"
            },
            {
              driverId: "alonso",
              permanentNumber: "14",
              code: "ALO",
              url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
              givenName: "Fernando",
              familyName: "Alonso",
              dateOfBirth: "1981-07-29",
              nationality: "Spanish"
            },
            {
              driverId: "alonso",
              permanentNumber: "14",
              code: "ALO",
              url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
              givenName: "Fernando",
              familyName: "Alonso",
              dateOfBirth: "1981-07-29",
              nationality: "Spanish"
            },
            {
              driverId: "alonso",
              permanentNumber: "14",
              code: "ALO",
              url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
              givenName: "Fernando",
              familyName: "Alonso",
              dateOfBirth: "1981-07-29",
              nationality: "Spanish"
            },
            {
              driverId: "raikkonen",
              permanentNumber: "7",
              code: "RAI",
              url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
              givenName: "Kimi",
              familyName: "Räikkönen",
              dateOfBirth: "1979-10-17",
              nationality: "Finnish"
            },
            {
              driverId: "raikkonen",
              permanentNumber: "7",
              code: "RAI",
              url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
              givenName: "Kimi",
              familyName: "Räikkönen",
              dateOfBirth: "1979-10-17",
              nationality: "Finnish"
            },
            {
              driverId: "alonso",
              permanentNumber: "14",
              code: "ALO",
              url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
              givenName: "Fernando",
              familyName: "Alonso",
              dateOfBirth: "1981-07-29",
              nationality: "Spanish"
            },
            {
              driverId: "raikkonen",
              permanentNumber: "7",
              code: "RAI",
              url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
              givenName: "Kimi",
              familyName: "Räikkönen",
              dateOfBirth: "1979-10-17",
              nationality: "Finnish"
            },
            {
              driverId: "michael_schumacher",
              code: "MSC",
              url: "http://en.wikipedia.org/wiki/Michael_Schumacher",
              givenName: "Michael",
              familyName: "Schumacher",
              dateOfBirth: "1969-01-03",
              nationality: "German"
            },
            {
              driverId: "alonso",
              permanentNumber: "14",
              code: "ALO",
              url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
              givenName: "Fernando",
              familyName: "Alonso",
              dateOfBirth: "1981-07-29",
              nationality: "Spanish"
            },
            {
              driverId: "montoya",
              code: "MON",
              url: "http://en.wikipedia.org/wiki/Juan_Pablo_Montoya",
              givenName: "Juan",
              familyName: "Pablo Montoya",
              dateOfBirth: "1975-09-20",
              nationality: "Colombian"
            },
            {
              driverId: "alonso",
              permanentNumber: "14",
              code: "ALO",
              url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
              givenName: "Fernando",
              familyName: "Alonso",
              dateOfBirth: "1981-07-29",
              nationality: "Spanish"
            },
            {
              driverId: "raikkonen",
              permanentNumber: "7",
              code: "RAI",
              url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
              givenName: "Kimi",
              familyName: "Räikkönen",
              dateOfBirth: "1979-10-17",
              nationality: "Finnish"
            },
            {
              driverId: "raikkonen",
              permanentNumber: "7",
              code: "RAI",
              url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
              givenName: "Kimi",
              familyName: "Räikkönen",
              dateOfBirth: "1979-10-17",
              nationality: "Finnish"
            },
            {
              driverId: "montoya",
              code: "MON",
              url: "http://en.wikipedia.org/wiki/Juan_Pablo_Montoya",
              givenName: "Juan",
              familyName: "Pablo Montoya",
              dateOfBirth: "1975-09-20",
              nationality: "Colombian"
            },
            {
              driverId: "raikkonen",
              permanentNumber: "7",
              code: "RAI",
              url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
              givenName: "Kimi",
              familyName: "Räikkönen",
              dateOfBirth: "1979-10-17",
              nationality: "Finnish"
            },
            {
              driverId: "montoya",
              code: "MON",
              url: "http://en.wikipedia.org/wiki/Juan_Pablo_Montoya",
              givenName: "Juan",
              familyName: "Pablo Montoya",
              dateOfBirth: "1975-09-20",
              nationality: "Colombian"
            },
            {
              driverId: "raikkonen",
              permanentNumber: "7",
              code: "RAI",
              url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
              givenName: "Kimi",
              familyName: "Räikkönen",
              dateOfBirth: "1979-10-17",
              nationality: "Finnish"
            },
            {
              driverId: "alonso",
              permanentNumber: "14",
              code: "ALO",
              url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
              givenName: "Fernando",
              familyName: "Alonso",
              dateOfBirth: "1981-07-29",
              nationality: "Spanish"
            }
          ]
        }
      ],
      requestYearResults: jest.fn()
    };
    const wrapper = shallow(<Champions {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
