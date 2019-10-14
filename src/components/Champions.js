import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getRacesBySeason } from "./utils";
import RaceWinners from "./RaceWinners";

const ChampionRow = styled.div`
  padding: 30px;
  margin: 30px;
  background-color: ${({ theme }) => theme.colors.grey30};
  display: grid;
  grid-template-columns: auto 50px;
  grid-template-areas:
    "year button"
    "name button";
`;

const Year = styled.span`
  grid-area: year;
`;
const Name = styled.span`
  font-size: 40px;
  font-weight: 600;
  grid-area: name;
`;

const Button = styled.button`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.blue10};
  border: none;
  cursor: pointer;
  grid-area: button;
  height: 50px;
`;

const ArrowDown = () => (
  <svg width="32" height="32">
    <defs>
      <path
        d="M15 19.657V8a1 1 0 012 0v11.657l2.95-2.95a1 1 0 111.414 1.414l-4.243 4.243a.998.998 0 01-.3.206.999.999 0 01-1.642 0 .998.998 0 01-.3-.206l-4.243-4.243a1 1 0 111.414-1.414l2.95 2.95z"
        id="a"
      />
    </defs>
    <use fill="#fff" fillRule="nonzero" xlinkHref="#a" />
  </svg>
);

const Champions = ({ standingsList, raceList, requestYearResults }) => (
  <div>
    {standingsList.map(season => (
      <ChampionRow key={season.season}>
        <Year>{season.season}</Year>
        <Name>{`${season.driver.givenName} ${season.driver.familyName}`}</Name>

        <RaceWinners
          raceListBySeason={getRacesBySeason(raceList, season.season)}
          season={season.season}
          champion={season.driver.code}
        />

        <Button onClick={() => requestYearResults(season.season)}>
          <ArrowDown />
        </Button>
      </ChampionRow>
    ))}
  </div>
);

Champions.propTypes = {
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
  requestYearResults: PropTypes.func.isRequired
};

export default Champions;
