// set Method:
// how to set the individual date.
// it returns date in milliseconds.
const currentDate = new Date();
console.log(currentDate.setFullYear(2018));
console.log(currentDate.setMonth(10));
console.log(currentDate.setDate(5));


// how to set a individual time.
// it return time in millisecond.
const currentTime = new Date();
console.log(currentTime.setTime(6546));
console.log(currentTime.setHours(17));
console.log(currentTime.setMinutes(50));
console.log(currentTime.setSeconds(40));
console.log(currentTime.setMilliseconds(655));

// Compare Dates:
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
};

console.log(text);

// Finished.
