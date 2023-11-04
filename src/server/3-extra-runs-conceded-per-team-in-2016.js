function getExtraRunsConcededPerTeamIn2016(matches, deliveries){
    // let matchesIn2016 = {};
    let matchesIn2016 = new Set();
    matches.forEach(match => {
        if(match.season == "2016"){
            matchesIn2016.add(match.id);
        }    
    });

    let extraRunsConcededPerTeamIn2016 = {};
    deliveries.forEach(delivery => {
        if(matchesIn2016.has(delivery.match_id)){
            if(extraRunsConcededPerTeamIn2016.hasOwnProperty(delivery.bowling_team)){
                extraRunsConcededPerTeamIn2016[delivery.bowling_team] += Number(delivery.extra_runs);
            }
            else{
                extraRunsConcededPerTeamIn2016[delivery.bowling_team] = Number(delivery.extra_runs);
            }
        }
    });

    return extraRunsConcededPerTeamIn2016;
}

module.exports = getExtraRunsConcededPerTeamIn2016;