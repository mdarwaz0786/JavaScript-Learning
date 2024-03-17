// Date and Time Method: 
// javaScript date object represents a single moment in time in a platform independent format.
// Date object contain a number that represent milliseconds since 1 january 1970 00:00:00 UTC.

// JavaScript Date Input Format:
// There are generally 3 types of JavaScript date input formats:
// ISO Date: "2015-03-25" (The International Standard)
// Short Date: "03/25/2015"
// Long Date: "Mar 25 2015" or "25 Mar 2015"
var d = new Date("2015-03-25");
console.log(d);

// There are 4 ways to creating a new date object:
// 1.new Date().
// 2.new Date(year,month,day,hours,minutes,seconds,milliseconds).
// 3.new Date(milliseconds).
// 4.new Date(date string).

// new Date():
// Date object are created with the new Date() constructer.
let currentDate = new Date();
console.log(currentDate);
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());

// Date.now():
// Returns the numeric value corresponding to the current time, the number of milliseconds elapsed since 1 january 1970 00:00:00 UTC.
console.log(Date.now());

// new Date(year,month,day,hour,minute,second and millisecond):
// javaScript counts months from 0  to 11. January is 0 and December is 11.
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d.toLocaleString());

// new Date(dateString):
// it creates a new date object from a date string.
var d = new Date('october 13, 2018 13:30:00');
console.log(d.toLocaleString());

// new Date(millisecond):
// it creates a new date object as zero time plus milliseconds.
var d = new Date(1656354365373);
console.log(d.toLocaleString());

// Finished.