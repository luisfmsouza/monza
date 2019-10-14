import { getRacesBySeason } from "../utils";

describe("getRacesBySeason", () => {
  it("returns null when there is no races", () => {
    const raceList = null;
    const season = "2007";

    const actual = getRacesBySeason(raceList, season);

    expect(actual).toBeNull();
  });

  it("returns null when there is no races for a given year", () => {
    const raceList = [
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
          }
        ]
      },
      {
        season: "2006",
        races: [
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
          }
        ]
      }
    ];
    const season = "2007";

    const actual = getRacesBySeason(raceList, season);

    expect(actual).toBeNull();
  });

  it("returns the race list by a given season", () => {
    const raceList = [
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
          }
        ]
      },
      {
        season: "2006",
        races: [
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
          }
        ]
      }
    ];
    const season = "2005";

    const actual = getRacesBySeason(raceList, season);

    const expected = {
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
        }
      ]
    };

    expect(actual).toEqual(expected);
  });
});
