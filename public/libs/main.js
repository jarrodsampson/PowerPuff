var customScripts = {
    parallax: function () {

        $('.parallax').parallax();

    },
    scrollSpy: function () {

            $('.scrollspy').scrollSpy();

    },
    modals: function () {

        $('.modal-trigger').leanModal({
                    dismissible: true, // Modal can be dismissed by clicking outside of the modal
                    opacity: .5, // Opacity of modal background
                    in_duration: 300, // Transition in duration
                    out_duration: 200, // Transition out duration
                    ready: function() {  }, // Callback for Modal open
                    complete: function() {  } // Callback for Modal close
                });

    },
    wowScrolls: function () {

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
        /* ---------------------------------------------- */

        wow = new WOW({
            mobile: false,
            offset: 100,
        });
        wow.init();

    },
    headroom: function () {

        var header = document.querySelector("#header");
		if(window.location.hash) {
		  header.classList.add("slide--up");
		}

		new Headroom(header, {
			tolerance: {
			  down : 10,
			  up : 20
			},
			offset : 560,
			classes: {
			  initial: "slide",
			  pinned: "slide--reset",
			  unpinned: "slide--up"
			},
			// callback when pinned, `this` is headroom object
			onPin : function() {},
			// callback when unpinned, `this` is headroom object
			onUnpin : function() {},
			// callback when above offset, `this` is headroom object
			onTop : function() {},
			// callback when below offset, `this` is headroom object
			onNotTop : function() {}
		}).init();

		$(".button-collapse").sideNav();

    },
    scrollTop: function () {

       $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
       });

       // go to anchor when clicked
        $(function () {
            $('a[href*=#]:not([id=game]):not([id=history])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

        $(".loader").delay(1000).fadeOut(1000);

    },
    init: function () {
        customScripts.scrollTop();
        customScripts.wowScrolls();
        customScripts.headroom();
        customScripts.parallax();
        customScripts.scrollSpy();
        customScripts.modals();
    }
};
$('document').ready(function () {
    customScripts.init();
});