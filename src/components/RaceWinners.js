import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 80px 30px auto;
  grid-template-areas:
    "date dot name"
    "date dot circuit";
  margin: 30px 0;
`;

const RaceDate = styled.span`
  align-self: center;
  font-size: 12px;
  grid-area: date;
  text-align: right;
`;

const Dot = styled.span`
  align-self: center;
  background-color: white;
  border-radius: 15px;
  grid-area: dot;
  justify-self: center;
  height: 7px;
  width: 7px;
`;

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  grid-area: name;
`;

const Circuit = styled.span`
  font-size: 12px;
  grid-area: circuit;
`;

const RaceWinners = ({ raceListBySeason, season, champion }) =>
  raceListBySeason && (
    <List>
      {raceListBySeason.races.map((race, index) => (
        <Item key={`${season}-${index}`}>
          <RaceDate>{race.date}</RaceDate>
          <Dot />
          <Name>
            {`${race.givenName} ${race.familyName}`}
            {race.code === champion && " 🏆"}
          </Name>
          <Circuit>{race.circuitName}</Circuit>
        </Item>
      ))}
    </List>
  );

RaceWinners.propTypes = {
  raceListBySeason: PropTypes.shape({
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
  }),
  season: PropTypes.string.isRequired,
  champion: PropTypes.string.isRequired
};

export default RaceWinners;
