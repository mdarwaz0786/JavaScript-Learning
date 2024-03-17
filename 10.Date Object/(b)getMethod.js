// get method:
// how to get a individual date.
const currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getDay());

// how to get a individual time.
const currentTime = new Date();
console.log(currentTime.getTime());  // return milliseconds since January 1, 1970.
console.log(currentTime.getHours());
console.log(currentTime.getMinutes());
console.log(currentTime.getSeconds());
console.log(currentTime.getMilliseconds());

// getTimezoneOffset():
// this method returns the difference (in minutes) between local time and UTC time.
var d = new Date();
console.log(d.getTimezoneOffset());

// UCT and GMT:
// UTC methods use UTC time (Coordinated Universal Time).
// UTC time is the same as GMT (Greenwich Mean Time).
var d = new Date();
const hoursUTC = d.getUTCHours();
const minutesUTC = d.getUTCMinutes();
const secondsUTC = d.getUTCSeconds();
console.log(`Current UTC time: ${hoursUTC}:${minutesUTC}:${secondsUTC}`);

// Finished.
