export const getRacesBySeason = (raceList, season) => {
  if (raceList) {
    const filteredRaces = raceList.filter(race => race.season === season);

    return filteredRaces.length ? filteredRaces[0] : null;
  }

  return null;
};
