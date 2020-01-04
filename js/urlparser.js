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
    document.title = eval(renderData + '.fundname') + " | Fund Details";
    document.getElementById('fundtitle').innerHTML = eval(
        renderData + '.fundname'
    );
    document.getElementById('imageurl').src = eval(renderData + '.imageurl');
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
    document.getElementById('forms').href = code + '.html#forms';
    document.getElementById('funding').href = code + '.html#funding';
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


    // start share social
    let uri = window.location.href;
    let res = encodeURIComponent(uri);
    let title = document.title
    let title2 = encodeURIComponent(title);

    document.getElementById('shareFB').href = "https://www.facebook.com/dialog/share?app_id=5303202981&display=popup&href=" + res + "redirect_uri=https%3a%2f%2fstatic.addtoany.com%2fmenu%2fthanks.html%23url%3d" + res;
    document.getElementById('shareMSR').href = "https://www.addtoany.com/add_to/facebook_messenger?linkurl=" + res + "=" + title2 + "&linknote=" + title2;
    document.getElementById('shareVBR').href = "viber://forward?text=" + title2 + res;
    document.getElementById('shareWHA').href = "https://api.whatsapp.com/send?text=" + title2 + res;
    // document.getElementById('shareWC').href = "https://www.addtoany.com/ext/wechat/share/#url=" + res + title;





};


// fill dat
let output = fetch(api)
    .then(response => response.json())
    .then(json => {
        this.dataFill(json);
    });