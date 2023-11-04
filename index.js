let getMatchesPerYear = require('./src/server/1-matches-per-year.js');
let getMatchesWonPerTeamPerYear = require('./src/server/2-matches-won-per-team-per-year.js');
let getExtraRunsConcededPerTeamIn2016 = require('./src/server/3-extra-runs-conceded-per-team-in-2016.js');
let getTopEconomicalBowlersIn2015 = require('./src/server/4-top-economic-bowlers-in-2015.js');
const csv = require('csv-parser')
const fs = require('fs')

const matches = [];
const deliveries = [];

fs.createReadStream('./src/data/matches.csv')
  .pipe(csv())
  .on('data', (data) => matches.push(data))
  .on('end', () => {

    let result = getMatchesPerYear(matches);
    fs.writeFileSync('./src/public/output/matchesPerYear.json',JSON.stringify(result,null,1));

    result = getMatchesWonPerTeamPerYear(matches);
    fs.writeFileSync('./src/public/output/matchesWonPerTeamPerYear.json',JSON.stringify(result,null,1));

    fs.createReadStream('./src/data/deliveries.csv')
  .pipe(csv())
  .on('data', (data) => deliveries.push(data))
  .on('end', () => {

    result = getExtraRunsConcededPerTeamIn2016(matches, deliveries);
    fs.writeFileSync('./src/public/output/extraRunsConcededPerTeamIn2016.json',JSON.stringify(result,null,1));

    result = getTopEconomicalBowlersIn2015(matches, deliveries);
    fs.writeFileSync('./src/public/output/topEconomicalBowlersIn2015.json',JSON.stringify(result,null,1));


  });

  });