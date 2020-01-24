setTimeout(function(colors) {
    let tag = document.querySelectorAll('.indiv-tag');
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