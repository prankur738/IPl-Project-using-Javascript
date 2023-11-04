function getMatchesPerYear(matches){
    let matchesPerYear = {};

    matches.forEach(match => {
        if(matchesPerYear.hasOwnProperty(match.season)){
            matchesPerYear[match.season]++;
        }
        else{
            matchesPerYear[match.season] = 1;
        }
    });

    return matchesPerYear;
}

module.exports = getMatchesPerYear;