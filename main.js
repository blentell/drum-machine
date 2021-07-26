// Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");
const hihat = new Audio("sounds/hi-hat.mp3");
const kickdrum = new Audio("sounds/kick-drum.mp3");
const snaredrum = new Audio("sounds/snare-drum.mp3");
const counter = document.querySelector("#counter");

// This function is called every 600ms
let count = 0;

function update() {
	// Play the 'tick' sound
	const metronomeCount = (count % 4) + 1;
	counter.innerHTML = metronomeCount;
	count++;
	const checkedMetronome = document.querySelector("#metronome");
	const checkedHihat = document.querySelector("#hi-hat");
	const checkedSnaredrum = document.querySelector("#snare-drum");
	const checkedKickdrum = document.querySelector("#kick-drum");

	if (checkedMetronome.checked === true) {
		if (metronomeCount % 4 === 0) {
			tock.play();
			count = 0;
		} else {
			tick.play();
		}
	}
	if (checkedHihat.checked === true) {
		const hihatTimingInput = document.querySelector("#hi-hatTimingInput");
		if (Number(hihatTimingInput.value) === metronomeCount) {
			hihat.play();
		}
	}
	if (checkedSnaredrum.checked === true) {
		const snaredrumTimingInput = document.querySelector("#snare-drumTimingInput");
		if (Number(snaredrumTimingInput.value) === metronomeCount) {
			snaredrum.play();
		}
	}
	if (checkedKickdrum.checked === true) {
		const kickdrumTimingInput = document.querySelector("#kick-drumTimingInput");
		if (Number(kickdrumTimingInput.value) === metronomeCount) {
			kickdrum.play();
		}
	}
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
	setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
