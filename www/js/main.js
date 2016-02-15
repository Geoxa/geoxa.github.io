(function($) {

    $(document).ready(function(){
    	/*
    	 *  Sticky header
    	 */
        $("#main-menu").sticky({topSpacing:0});
        $("#branding").sticky({topSpacing:-150});
        $("#article").sticky({topSpacing:38});
        $("#header").sticky({topSpacing:-45});

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

    });

})(jQuery);

