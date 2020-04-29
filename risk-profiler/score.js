function getUrlVars() {
	let vars = {};
	let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
		m,
		key,
		value
	) {
		vars[key] = value;
	});
	if (vars == {}) {
		window.location.href = './404.html';
	} else {
		return vars;
	}
}

let sum = getUrlVars()['points'];
// console.log(sum)

if (sum >= 22) {
	type = "an Aggressive";
} else if (sum == 9 || sum <= 16) {
	type = "a Conservative";
} else if (sum > 17 || sum < 22) {
	type = "a Moderately Aggressive";
} else {
	document.getElementById("score-statement").classList.add('d-none');
}

document.getElementById("score-statement").innerHTML = `You scored ${sum} points. You are ${type}-type investor!`