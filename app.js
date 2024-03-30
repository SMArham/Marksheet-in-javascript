var percent = +prompt("Enter Your Percentage");
if (percent >= 80 && percent <= 100) {
  alert("A+");
} else if (percent >= 70 && percent <= 80) {
  alert("A");
} else if (percent >= 60 && percent <= 70) {
  alert("B");
} else if (percent >= 50 && percent <= 60) {
  alert("C");
} else if (percent >= 40 && percent <= 50) {
  alert("D");
} else if (percent >= 30 && percent <= 40) {
  alert("F");
} else {
  alert("You did not write correct percentage");
}
