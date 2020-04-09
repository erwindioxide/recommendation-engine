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

//alerts sum
$('#res').on('click', function () {
	alert(getsum());

});

// get sum of values
function getsum() {
	var sum = 0;
	$('input:checked').each(function () {
		sum += parseInt($(this).val());
	});
	if (sum <= 14) {
		return ("Conservative")
	};
	if (sum > 18) {
		return ("Aggressive")
	};
	if (15 < sum <= 18) {
		return ("Moderate")
	}

}