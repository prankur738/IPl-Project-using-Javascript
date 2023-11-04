function getTopEconomicalBowlersIn2015(matches, deliveries){
    let matchesIn2015 = new Set();
    matches.forEach(match => {
        if(match.season == '2015'){
            matchesIn2015.add(match.id);
        }
    });

    let runsAndBallsPerBowler = {};
    deliveries.forEach(delivery =>{        
        if(matchesIn2015.has(delivery.match_id)){

            let run = delivery.total_runs - delivery.bye_runs - delivery.legbye_runs - delivery.penalty_runs;
            let ball = 1;
            if(delivery.wide_runs != 0 && delivery.noball_runs != 0){
                ball = 0;
            }
            
            if(runsAndBallsPerBowler.hasOwnProperty(delivery.bowler)){
                runsAndBallsPerBowler[delivery.bowler].runs += run;
                runsAndBallsPerBowler[delivery.bowler].balls += ball; 
            }
            else{
                runsAndBallsPerBowler[delivery.bowler] = {};
                runsAndBallsPerBowler[delivery.bowler].runs = run;
                runsAndBallsPerBowler[delivery.bowler].balls = ball;
            }
        }
    });
    
    let economyPerBowler = {};
    for(let bowler in runsAndBallsPerBowler ) {
        economyPerBowler[bowler] = (runsAndBallsPerBowler[bowler].runs*6)/runsAndBallsPerBowler[bowler].balls;
    }

    const sortedKeys = Object.keys(economyPerBowler).sort((a,b) => economyPerBowler[a]-economyPerBowler[b]);
    const top10Keys = sortedKeys.slice(0,10);

    const sortedObject = {};
    top10Keys.forEach(key => {
        sortedObject[key] = economyPerBowler[key];
    });

    return sortedObject;

}

module.exports = getTopEconomicalBowlersIn2015;