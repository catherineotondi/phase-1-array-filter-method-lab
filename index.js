// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name){
    return drivers.filter(driver=>driver.toLowerCase()===name.toLowerCase())
    
}
console.log(findMatching(drivers,'sally'))


function fuzzyMatch(drivers,name){
    return drivers.filter(driver=>driver.startsWith(name))

    
}

function matchName(drivers,names){
    return drivers.filter(driver=>driver.name === names)
    
}