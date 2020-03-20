function startQuiz() {
	document.getElementById("1").classList.remove("d-none");
	document.getElementById("start").classList.add("d-none");

}

function show2nd() {
	document.getElementById("2nd").classList.remove("d-none");
}

function secondQuestion() {
	document.getElementById("1").classList.add("d-none");
	document.getElementById("2").classList.remove("d-none");
}

function show3rd() {
	document.getElementById("3rd").classList.remove("d-none");
}

function thirdQuestion() {
	document.getElementById("2").classList.add("d-none");
	document.getElementById("3").classList.remove("d-none");
}

function show4th() {
	document.getElementById("4th").classList.remove("d-none");
}

function fourthQuestion() {
	document.getElementById("3").classList.add("d-none");
	document.getElementById("4").classList.remove("d-none");
}

function show5th() {
	document.getElementById("5th").classList.remove("d-none");
}

function fifthQuestion() {
	document.getElementById("4").classList.add("d-none");
	document.getElementById("5").classList.remove("d-none");
}

function show6th() {
	document.getElementById("6th").classList.remove("d-none");
}

function sixthQuestion() {
	document.getElementById("5").classList.add("d-none");
	document.getElementById("6").classList.remove("d-none");
}

function show7th() {
	document.getElementById("7th").classList.remove("d-none");
}

function seventhQuestion() {
	document.getElementById("6").classList.add("d-none");
	document.getElementById("7").classList.remove("d-none");
}

function show8th() {
	document.getElementById("8th").classList.remove("d-none");
}

function eighthQuestion() {
	document.getElementById("7").classList.add("d-none");
	document.getElementById("8").classList.remove("d-none");
}

function show9th() {
	document.getElementById("9th").classList.remove("d-none");
}

function ninthQuestion() {
	document.getElementById("8").classList.add("d-none");
	document.getElementById("9").classList.remove("d-none");
}

function showResBtn() {
	document.getElementById("res").classList.remove("d-none");
}

$('#res').on('click', function () {
	alert(getsum());

});

function getsum() {
	var sum = 0;
	$('input:checked').each(function () {
		sum += parseInt($(this).val());
	});
	console.log(sum)
	if (sum <= 14) {
		return ("Conservative")
	}
	if (sum > 18) {
		return ("Aggressive")
	}
	if (15 < sum <= 18) {
		return ("Moderate")
	}


}