const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  alert("Please enter a valid age");
} else if (age < 18) {
  console.log("You are too young");
} else {
  console.log("You can drink");
}

// console.log(age, parseInt(age));
