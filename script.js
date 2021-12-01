const finalTime = 259200 - 86390;
let startTime = 0;
let days = document.getElementById("timeDays");
let hours = document.getElementById("timeHours");
let minutes = document.getElementById("timeMinutes");
let secondsCurrent = document.getElementById("timeSecondsCurrent");
let secondsFuture = document.getElementById("timeSecondsFuture");
let secondsFutureStaticTop = document.getElementById(
	"timeSecondsFutureStaticTop"
);
let secondsFutureStaticBottom = document.getElementById(
	"timeSecondsFutureStaticBottom"
);

setInterval(() => {
	// console.log(endTime);
	startTime++;
	secondsCurrent.innerHTML = (finalTime - startTime) % 60;
	secondsFuture.innerHTML = (finalTime - startTime) % 60;
	secondsFutureStaticTop.innerHTML = secondsFuture.innerHTML;
	secondsFutureStaticBottom.innerHTML = secondsCurrent.innerHTML;

	minutes.innerHTML = parseInt((finalTime - startTime) / 60) % 60;
	hours.innerHTML = parseInt((finalTime - startTime) / 3600) % 24;
	days.innerHTML = parseInt((finalTime - startTime) / 86400);
}, 1000);
