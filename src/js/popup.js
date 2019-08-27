
// Constants for question time base
const MATH_NO_CALC = "1:10";
const MATH_CALC = "1:20";
const READING = "10:00";
const WRITING = "8:00";

// Create a new date variable that stores the current system time
let startTime = new Date();

// Get the starting hours, minutes and seconds for easy reference (date is out of scope, potential bug)
let sHour = startTime.getHours();
let sMin = startTime.getMinutes();
let sSec = startTime.getSeconds();

function periodicTimerUpdate () {

  // Get the current time and get the difference
  let now = new Date();

  // Variables for minues and seconds specific
  let cHour = now.getHours();
  let cMin = now.getMinutes();
  let cSec = now.getSeconds();

  // Get the differences between when the timer starts and the current time
  let hDiff = cHour - sHour;
  let mDiff = cMin - sMin;
  let sDiff = cSec - sSec;

}
