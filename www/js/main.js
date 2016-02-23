(function() {
    'use strict';

    var isScrolled = false;
    var scrolledState = 0;
    var scrolledStates = [{
        pos: 0,
        name: "position-top"
    },{
        pos: 1,
        name: "position-step1"
    },{
        pos: 48,
        name: "position-step2"
    },{
        pos: 100,
        name: "position-step3"
    },{
        pos: 400,
        name: "position-step4"
    }];

    function addClass( element, className ) {
        if (!element || !className){
            return;
        }

        var classString = element.className, nameIndex = classString.indexOf(className);

        if (nameIndex === -1) {
            classString += ' ' + className;
        }

        element.className = classString.replace(/ +/g, ' ');
    }

    function removeClass( element, className ) {
        if (!element || !className){
            return;
        }

        var classString = element.className, nameIndex = classString.indexOf(className);

        // if (nameIndex !== -1) {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
        // }

        element.className = classString.replace(/ +/g, ' ');
    }

    /*
     *  Scroll offset
     */

     var scrollHandler = function(){
        var body = document.getElementsByTagName('body')[0];
        var currentScrolledState = scrolledState;


        for( var i = 0 ; i < scrolledStates.length && scrolledStates[i] && scrollY >= scrolledStates[i].pos ; i++ ) {

            if( scrolledStates[i+1] && scrollY < scrolledStates[i+1].pos ) {
                scrolledState = i;
            }
            else if (!scrolledStates[i+1]) {
                scrolledState = i;
            }
        }

        removeClass( body, scrolledStates[currentScrolledState].name );
        addClass( body, scrolledStates[scrolledState].name );
     }

     window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    /*
     *  Hamburger menu
     */
	var hamburger = document.getElementById('hamburger');
	var body = document.body;

	hamburger.addEventListener('click', function(){
		if( body.getAttribute('class') == 'hamburger-active') {
			body.setAttribute('class', '');
		}
		else {
			body.setAttribute('class', 'hamburger-active');
		}
	});
})();

