// parse url for data

function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
        m,
        key,
        value
    ) {
        vars[key] = value;
    });
    return vars;
}

let code = getUrlVars()['fundmanagercode'].toLowerCase();
let id = getUrlVars()['id'];
let app = document.querySelector('.app');
let api = 'https://v2-api.sheety.co/rampverfinancials/mfapi/' + code + '/' + id;

// concat api selector
let renderData = 'json.' + code;

function dataFill(json) {
    document.querySelector('meta[property="og:title"]').setAttribute("content", document.title);
    document.querySelector('meta[name="description"]').setAttribute("content", eval(renderData + '.description'));
    // document.querySelector('meta[property="og:description"]').setAttribute("content", eval(renderData + '.description'));
    document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.href);
    // document.querySelector('meta[property="og:image"]').setAttribute("content", eval(renderData + '.imageurl'));
    document.title = eval(renderData + '.fundname') + " | Fund Details";
    document.getElementById('fundtitle').innerHTML = eval(renderData + '.fundname');
    document.getElementById('imageurl').src = eval(renderData + '.imageurl');
    document.getElementById('navps').innerHTML = eval(renderData + '.navps');
    document.getElementById('ytdtop').innerHTML = eval(renderData + '.ytd');
    document.getElementById('introduction').innerHTML = eval(renderData + '.introduction');
    document.getElementById('description').innerHTML = eval(renderData + '.description');
    document.getElementById('ffy1').innerHTML = eval(renderData + '.ffy1');
    document.getElementById('ffy2').innerHTML = eval(renderData + '.ffy2');
    document.getElementById('ffy3').innerHTML = eval(renderData + '.ffy3');
    document.getElementById('type').innerHTML = eval(renderData + '.type');
    document.getElementById('fundmanagername').innerHTML = eval(renderData + '.fundmanagername');
    document.getElementById('ytd').innerHTML = eval(renderData + '.ytd');
    document.getElementById('riskprofile').innerHTML = eval(renderData + '.riskprofile');
    document.getElementById('currency').innerHTML = eval(renderData + '.currency');
    document.getElementById('initial').innerHTML = eval(renderData + '.initial');
    document.getElementById('additional').innerHTML = eval(renderData + '.additional');
    document.getElementById('timehorizon').innerHTML = eval(renderData + '.timehorizon');
    document.getElementById('inception').innerHTML = eval(renderData + '.inception');
    document.getElementById('managementfee').innerHTML = eval(renderData + '.managementfee');
    document.getElementById('salesload').innerHTML = eval(renderData + '.salesload');
    document.getElementById('holdingperiod').innerHTML = eval(renderData + '.holdingperiod');
    document.getElementById('exitfee').innerHTML = eval(renderData + '.exitfee');
    document.getElementById('prospectuslink').href = eval(renderData + '.prospectuslink');
    document.getElementById('ffslink').href = eval(renderData + '.ffslink');
    document.getElementById('profilelink').href = code + '.html#profilelink';
    document.getElementById('forms').href = code + '.html#getStarted';
    document.getElementById('funding').href = code + '.html#getStarted';
    document.getElementById('fundnamevalue').value = eval(renderData + '.fundname');
    document.getElementById('prospectus').value = eval(renderData + '.prospectuslink');
    document.getElementById('ffs').value = eval(renderData + '.ffslink');
    document.getElementById('initialamt').value = eval(renderData + '.initial');
    document.getElementById('additionalamt').value = eval(renderData + '.additional');
    document.getElementById('urlGet').value = document.referrer;
    document.getElementById('imgGet').value = eval(renderData + '.imageurl');
    document.getElementById('suitability').value = eval(renderData + '.riskprofile');
    document.getElementById('intro_email').value = eval(renderData + '.introduction');
    document.getElementById('reason1').value = eval(renderData + '.ffy1');
    document.getElementById('reason2').value = eval(renderData + '.ffy2');
    document.getElementById('reason3').value = eval(renderData + '.ffy3');
    document.getElementById('fundnamesoa').innerHTML = eval(renderData + '.fundname');
    document.getElementById('soafundname').value = eval(renderData + '.fundname');

    let chart = Highcharts.stockChart('navChart', {
        data: {
            googleSpreadsheetKey: '1ymjfcHNL645si4rWH5wlLg0oKVPKH7M4IxUwiPTDDQU',
            googleSpreadsheetWorksheet: eval(renderData + '.navchart')
        },
        title: {
            text: 'NAVPS History'
        }
    });

};


// fill data
let output = fetch(api)
    .then(response => response.json())
    .then(json => {
        this.dataFill(json);
    });