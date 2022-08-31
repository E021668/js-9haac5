// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function highAndLow(numbers){
  /*Test string In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

  Examples
  highAndLow("1 2 3 4 5");  // return "5 1"
  highAndLow("1 2 -3 4 5"); // return "5 -3"
  highAndLow("1 9 3 4 -5"); // return "9 -5"*/

  var arr = numbers.split(" ");
  return arr;
}
var res = highAndLow("1 2 3 4");
document.write(res);