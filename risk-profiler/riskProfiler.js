//  shows "Next button" upon input click
function showBtn() {
	b = parseInt(event.target.parentNode.parentNode.id) + 1;
	c = "btn" + b;
	document.getElementById(c).classList.remove("d-none");
}

// shows next question; hides current question
function nextQuestion() {
	q = parseInt(event.target.parentNode.id);
	document.getElementById(q).classList.add("d-none");
	document.getElementById(q + 1).classList.remove("d-none");
}

// show get result btn
function showResBtn() {
	document.getElementById("res").classList.remove("d-none");
}

// get sum of values
function getsum() {
	var sum = 0;
	$('input:checked').each(function () {
		sum += parseInt($(this).val());
		// console.log(sum)
	});
	// return sum
	// if (sum <= 13) {
	// 	window.location.href = "./conservative.html?points=" + sum
	// };
	// if (sum > 18) {
	// 	window.location.href = "./aggressive.html?points=" + sum
	// };
	// if (sum < 15 || sum <= 20) {
	// 	window.location.href = "./moderately-aggressive.html?points=" + sum
	// }
	if (sum >= 22) {
		window.location.href = "./aggressive.html?points=" + sum
	} else if (sum == 9 || sum <= 16) {
		window.location.href = "./conservative.html?points=" + sum
	} else if (sum > 17 || sum < 22) {
		window.location.href = "./moderately-aggressive.html?points=" + sum
	} else {
		window.location.reload;
	}

}