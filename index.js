// Code your solution here

findMatching = (drivers, string) => {
    return drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase()});
  };

function fuzzyMatch (drivers, string) {
    return drivers.filter(function (driver) {return driver.toLowerCase().substring(0, string.length) === string.toLowerCase()});
  }

/*fuzzyMatch = (drivers, string) => {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, string.length) === string.toLowerCase() })
}*/

function matchName(drivers, para) {
    return drivers.filter(function (driver) { return driver.name === para });
}