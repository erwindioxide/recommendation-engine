function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

var code = (getUrlVars()["fundmanagercode"]).toLowerCase();
var id = getUrlVars()["id"];
var app = document.querySelector('.app');
var api = 'https://v2-api.sheety.co/rampverfinancials/mfapi/' + code + '/' + id;

var renderData = "json." + code;

function dataFill(json) {
    document.getElementById("fundtitle").innerHTML = eval(renderData + ".fundname");
    document.getElementById("fundname").innerHTML = eval(renderData + ".fundname");
    document.getElementById("initial").innerHTML = eval(renderData + ".initial");
    document.getElementById("additional").innerHTML = eval(renderData + ".additional");
    document.getElementById("type").innerHTML = eval(renderData + ".type");
    document.getElementById("imageurl").src = eval(renderData + ".imageurl");

}


var output = fetch(api)
    .then(response => response.json())
    .then(json => {
        this.dataFill(json);
    });