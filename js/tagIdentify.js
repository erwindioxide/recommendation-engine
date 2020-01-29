setTimeout(function(colors) {
    let tag = document.querySelectorAll('.indiv-tag');
    let typelink = document.querySelectorAll('.typelink');
    typelink.forEach(function(el) {
        if (el.innerHTML == 'Equity Fund') {
            el.setAttribute('href', './aggressive.html');
        } else if (el.innerHTML == 'Equity Index Fund') {
            el.setAttribute('href', './indexfunds.html');
        } else if (el.innerHTML == 'Balanced Fund') {
            el.setAttribute('href', './moderate.html');
        } else if (el.innerHTML == 'Unitized Balanced Fund') {
            el.setAttribute('href', './moderate.html');
        } else if (el.innerHTML == 'Bond Fund') {
            el.setAttribute('href', './conservative.html');
        } else if (el.innerHTML == 'Money Market Fund') {
            el.setAttribute('href', './conservative.html');
        } else {
            el.setAttribute('href', './recommended.html');
        }
    });
    tag.forEach(function(element) {
        if (element.innerHTML == 'Recommended') {
            element.innerHTML = 'Recommended';
            element.classList.add('tag-recommended');
        } else if (element.innerHTML == 'Index') {
            element.innerHTML = 'Index';
            element.classList.add('tag-index');
        } else if (element.innerHTML == 'Dollar') {
            element.classList.add('tag-dollar');
            element.innerHTML = 'Dollar';
        } else {
            element.classList.add('d-none');
            element.innerHTML = 'Unknown';
        }
    });
}, 3500);