(function () {
    'use strict';
    /*
     *  Hamburger menu
     */
    var hamburger = document.getElementById('hamburger');
    var body = document.body;

    hamburger.addEventListener('click', function () {
        if (body.getAttribute('class') == 'hamburger-active') {
            body.setAttribute('class', '');
        } else {
            body.setAttribute('class', 'hamburger-active');
        }
    });


})();