// Code your solution here
function superbowlWin(record) {
    
    const winningYear = record.find(game => game.result === "W");
    
    
    return winningYear ? winningYear.year : undefined;
}

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}


module.exports = { superbowlWin, findMatching, fuzzyMatch, matchName };
