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
    if (vars == {}) {
        window.location.href = './404.html';
    } else {
        return vars;
    }
}

let code = getUrlVars()['fundmanagercode'].toLowerCase();
let codeBig = getUrlVars()['fundmanagercode'];
let id = getUrlVars()['id'];
let app = document.querySelector('.app');
let api = 'https://v2-api.sheety.co/rampverfinancials/mfapi/' + code + '/' + id;


let renderData = 'json.' + code;

// concat api selector

// assign api data to HTML IDs
function dataFill(json) {
    document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', document.title);
    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', eval(renderData + '.description'));
    // document.querySelector('meta[property="og:description"]').setAttribute("content", eval(renderData + '.description'));
    document
        .querySelector('meta[property="og:url"]')
        .setAttribute('content', window.location.href);
    // document.querySelector('meta[property="og:image"]').setAttribute("content", eval(renderData + '.imageurl'));
    document.title = eval(renderData + '.fundname') + ' | Fund Details';
    document.getElementById('fundtitle').innerHTML = eval(
        renderData + '.fundname'
    );
    document.getElementById('imageurl').src = eval(renderData + '.imageurl');
    document.getElementById('fundQR').src =
        'https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=124735&data=https://invest.rampver.com/fund-details.html?fundmanagercode=' +
        codeBig +
        '%26id=' +
        id;
    document.getElementById('QRName').innerHTML = eval(renderData + '.fundname');
    let lazyload = eval(renderData + '.imageurl');
    document.getElementById('imageurl').setAttribute('data-src', lazyload);
    document.getElementById('navps').innerHTML = eval(renderData + '.navps');
    document.getElementById('ytdtop').innerHTML = eval(renderData + '.ytd');
    document.getElementById('introduction').innerHTML = eval(
        renderData + '.introduction'
    );
    document.getElementById('description').innerHTML = eval(
        renderData + '.description'
    );
    document.getElementById('ffy1').innerHTML = eval(renderData + '.ffy1');
    document.getElementById('ffy2').innerHTML = eval(renderData + '.ffy2');
    document.getElementById('ffy3').innerHTML = eval(renderData + '.ffy3');
    document.getElementById('type').innerHTML = eval(renderData + '.type');
    document.getElementById('fundmanagername').innerHTML = eval(
        renderData + '.fundmanagername'
    );
    document.getElementById('ytd').innerHTML = eval(renderData + '.ytd');
    document.getElementById('riskprofile').innerHTML = eval(
        renderData + '.riskprofile'
    );
    document.getElementById('currency').innerHTML = eval(
        renderData + '.currency'
    );
    document.getElementById('initial').innerHTML = eval(renderData + '.initial');
    document.getElementById('additional').innerHTML = eval(
        renderData + '.additional'
    );
    document.getElementById('timehorizon').innerHTML = eval(
        renderData + '.timehorizon'
    );
    document.getElementById('inception').innerHTML = eval(
        renderData + '.inception'
    );
    document.getElementById('managementfee').innerHTML = eval(
        renderData + '.managementfee'
    );
    document.getElementById('salesload').innerHTML = eval(
        renderData + '.salesload'
    );
    document.getElementById('holdingperiod').innerHTML = eval(
        renderData + '.holdingperiod'
    );
    document.getElementById('exitfee').innerHTML = eval(renderData + '.exitfee');
    document.getElementById('prospectuslink').href = eval(
        renderData + '.prospectuslink'
    );
    document.getElementById('ffslink').href = eval(renderData + '.ffslink');
    document.getElementById('profilelink').href = code + '.html#profilelink';
    document.getElementById('forms').href = code + '.html#getStarted';
    document.getElementById('funding').href = code + '.html#getStarted';
    document.getElementById('fundnamevalue').value = eval(
        renderData + '.fundname'
    );
    document.getElementById('prospectus').value = eval(
        renderData + '.prospectuslink'
    );
    document.getElementById('ffs').value = eval(renderData + '.ffslink');
    document.getElementById('initialamt').value = eval(renderData + '.initial');
    document.getElementById('additionalamt').value = eval(
        renderData + '.additional'
    );
    document.getElementById('urlGet').value = document.referrer;
    document.getElementById('imgGet').value = eval(renderData + '.imageurl');
    document.getElementById('suitability').value = eval(
        renderData + '.riskprofile'
    );
    document.getElementById('intro_email').value = eval(
        renderData + '.introduction'
    );
    document.getElementById('reason1').value = eval(renderData + '.ffy1');
    document.getElementById('reason2').value = eval(renderData + '.ffy2');
    document.getElementById('reason3').value = eval(renderData + '.ffy3');
    document.getElementById('fundnamesoa').innerHTML = eval(
        renderData + '.fundname'
    );
    document.getElementById('soafundname').value = eval(renderData + '.fundname');



    // Highstocks
    Highcharts.setOptions({
        colors: ['#256141']
    });

    let chart = Highcharts.stockChart('navChart', {
        navigator: {
            enabled: false
        },
        data: {
            googleSpreadsheetKey: '1ymjfcHNL645si4rWH5wlLg0oKVPKH7M4IxUwiPTDDQU',
            googleSpreadsheetWorksheet: eval(renderData + '.navchart')
        },
        title: {
            text: 'NAVPS History',
            style: {
                color: '#256141'
            }
        },
        xAxis: {
            ordinal: true,
            type: 'datetime',
            max: +new Date(),
            ceiling: +new Date(),
            events: {
                setExtremes: +new Date(),
                afterSetExtremes: +new Date()
            }
        },
        rangeSelector: {
            buttons: [{
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m'
                },
                {
                    type: 'year',
                    count: 3,
                    text: '3y'
                },
                {
                    type: 'year',
                    count: 5,
                    text: '5y'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'YOY'
                },
                {
                    type: 'ytd',
                    text: 'YTD',
                    max: +new Date(),
                    ceiling: +new Date()
                },
                {
                    type: 'all',
                    text: 'All'
                }
            ],
            selected: 5,
            inputPosition: {
                align: 'left',
                x: 0,
                y: 0
            },
            buttonPosition: {
                align: 'right',
                x: 0,
                y: 0
            }
        }
    });
    // Highstocks

    if (code == "soldivo") {
        document.getElementById('guidelines').value = "https://res.cloudinary.com/rampver-financials/image/upload/v1582874968/Rampver%20Financials%20Mutual%20Fund%20Pricipals%20Forms%20Library/Account%20Opening%20Guidelines%202020/Soldivo_Funds_Account_Opening_Guidelines.pdf";
        // document.getElementById('inv_guidelines').setAttribute("value", "https://res.cloudinary.com/rampver-financials/image/upload/v1582874968/Rampver%20Financials%20Mutual%20Fund%20Pricipals%20Forms%20Library/Account%20Opening%20Guidelines%202020/Soldivo_Funds_Account_Opening_Guidelines.pdf")
    } else if (code == "atram") {
        document.getElementById('guidelines').value = "https://res.cloudinary.com/rampver-financials/image/upload/v1582874969/Rampver%20Financials%20Mutual%20Fund%20Pricipals%20Forms%20Library/Account%20Opening%20Guidelines%202020/ATRAM_Account_Opening_Guidelines.pdf";
    } else if (code == "pemi") {
        document.getElementById('guidelines').value = "https://res.cloudinary.com/rampver-financials/image/upload/v1582874969/Rampver%20Financials%20Mutual%20Fund%20Pricipals%20Forms%20Library/Account%20Opening%20Guidelines%202020/Philequity_Mutual_Fund_Account_Opening_Guidelines.pdf";
    } else if (code == "slamci") {
        document.getElementById('guidelines').value = "https://res.cloudinary.com/rampver-financials/image/upload/v1582874968/Rampver%20Financials%20Mutual%20Fund%20Pricipals%20Forms%20Library/Account%20Opening%20Guidelines%202020/SLAMCI_Account_Opening_Guidelines.pdf";
    } else if (code == "fami") {
        document.getElementById('guidelines').value = "https://res.cloudinary.com/rampver-financials/image/upload/v1582874970/Rampver%20Financials%20Mutual%20Fund%20Pricipals%20Forms%20Library/Account%20Opening%20Guidelines%202020/FAMI_Account_Opening_Guidelines.pdf";
    } else if (code == "pami") {
        document.getElementById('guidelines').value = "https://res.cloudinary.com/rampver-financials/image/upload/v1582876804/Rampver%20Financials%20Mutual%20Fund%20Pricipals%20Forms%20Library/Account%20Opening%20Checklists/PAMICHECKLIST.png";
    } else {
        document.getElementById('guidelines').value = "https://res.cloudinary.com/rampver-financials/image/upload/v1571712275/Rampver_Financials_Mutual_Fund_Investing_Basics.pdf";
    }


}

// fill data
let output = fetch(api)
    .then(response => response.json())
    .then(json => {
        this.dataFill(json);
    });