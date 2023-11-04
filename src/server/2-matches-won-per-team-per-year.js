function getMatchesWonPerTeamPerYear(matches){
    let matchesWonPerTeamPerYear = {};

    matches.forEach(match => {

        if(matchesWonPerTeamPerYear.hasOwnProperty(match.season) && matchesWonPerTeamPerYear[match.season][match.winner]){
          matchesWonPerTeamPerYear[match.season][match.winner]++;  
        }
        else if(matchesWonPerTeamPerYear.hasOwnProperty(match.season)){
            matchesWonPerTeamPerYear[match.season][match.winner] = 1;
        }
        else{
            matchesWonPerTeamPerYear[match.season] = {};
            matchesWonPerTeamPerYear[match.season][match.winner] = 1;
        }                
    });

    return matchesWonPerTeamPerYear;
}

module.exports = getMatchesWonPerTeamPerYear;