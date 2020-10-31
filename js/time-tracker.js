// Selecting the hands of the clock
const secondHand = document.querySelector("#second-hand");
const minuteHand = document.querySelector("#minute-hand");
const hourHand = document.querySelector("#hour-hand");

// Selecting the tickling music
const tick = new Audio("sounds/tick.wav");

// Function to set hands
function setDate() {

	// Getting the current time.
	const date = new Date();

	// Setting up second hand
	const sec = date.getSeconds();
	const secDegree = ((sec / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secDegree}deg)`;

	// Setting up minute hand
	const min = date.getMinutes();
	const minDegree = ((min * 360 / 60) + (sec * 360 / 60) / 60) + 90;
	minuteHand.style.transform = `rotate(${minDegree}deg)`;

	// Setting up hour hand
	const hour = date.getHours();
	const hourDegree = (hour * 360 / 12 + ((min * 360 / 60) / 12)) + 90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;

	// console.log("Date: " + (hour - 12) + ":" + min + ":" + sec + "\nDate in Degree: " + hourDegree + ":" + minDegree + ":" + secDegree);
	// Playing the tickling sound.
	tick.play();
}

// Calling the function every second
setInterval(setDate, 1000);
