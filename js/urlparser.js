function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

let code = (getUrlVars()["fundmanagercode"]).toLowerCase();
let id = getUrlVars()["id"];
let app = document.querySelector('.app');
let api = 'https://v2-api.sheety.co/rampverfinancials/mfapi/' + code + '/' + id;

let renderData = "json." + code;

function dataFill(json) {
    document.getElementById("fundtitle").innerHTML = eval(renderData + ".fundname");
    document.getElementById("imageurl").src = eval(renderData + ".imageurl");
    document.getElementById("introduction").innerHTML = eval(renderData + ".introduction");
    document.getElementById("description").innerHTML = eval(renderData + ".description");
    document.getElementById("ffy1").innerHTML = eval(renderData + ".ffy1");
    document.getElementById("ffy2").innerHTML = eval(renderData + ".ffy2");
    document.getElementById("ffy3").innerHTML = eval(renderData + ".ffy3");
    document.getElementById("type").innerHTML = eval(renderData + ".type");
    document.getElementById("fundmanagername").innerHTML = eval(renderData + ".fundmanagername");
    document.getElementById("ytd").innerHTML = eval(renderData + ".ytd");
    document.getElementById("riskprofile").innerHTML = eval(renderData + ".riskprofile");
    document.getElementById("currency").innerHTML = eval(renderData + ".currency");
    document.getElementById("initial").innerHTML = eval(renderData + ".initial");
    document.getElementById("additional").innerHTML = eval(renderData + ".additional");
    document.getElementById("timehorizon").innerHTML = eval(renderData + ".timehorizon");
    document.getElementById("inception").innerHTML = eval(renderData + ".inception");
    document.getElementById("managementfee").innerHTML = eval(renderData + ".managementfee");
    document.getElementById("salesload").innerHTML = eval(renderData + ".salesload");
    document.getElementById("holdingperiod").innerHTML = eval(renderData + ".holdingperiod");
    document.getElementById("exitfee").innerHTML = eval(renderData + ".exitfee");
    document.getElementById("prospectuslink").href = eval(renderData + ".prospectuslink");
    document.getElementById("ffslink").href = eval(renderData + ".ffslink");
    document.getElementById("profilelink").href = code + ".html#profilelink";
    document.getElementById("forms").href = code + ".html#forms";
    document.getElementById("funding").href = code + ".html#funding";
    document.getElementById("formstring").action = eval(renderData + ".formstring");
    document.getElementById("fundnamevalue").value = eval(renderData + ".fundname");
    document.getElementById("wpcode").value = eval(renderData + ".wpcode");
    document.getElementById("wpcodetag").value = "wpcf7-f" + eval(renderData + ".wpcode") + "-o1eval";
}


let output = fetch(api)
    .then(response => response.json())
    .then(json => {
        this.dataFill(json);
    });