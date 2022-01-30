var loadData = function(callback) {
	console.log('entering load');
	if (!sessionStorage.getItem('imagesText') || sessionStorage.getItem('imagesText') == '') {
		console.log('pulling image text from session');
		jQuery.get('/images.txt', function(_data) {
			sessionStorage.setItem('imagesText', _data);
			console.log(_data);
			callback();
		}, 'text');
	} else { console.log(sessionStorage.getItem('imagesText')); callback(); }
};

(function($) {
	var data = '';

    // home slider
    $('.home-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        dots: false,
        nav: true,
        navText: ''
    });

    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        lazLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        dots: false,
        nav: true,
        navText: '',
        dots: true,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    });

    $('.portfolio-slider-4items').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 30,
        dots: false,
        nav: true,
        navText: '',
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            1024: {
                items: 3
            },

        }
    });

    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 8000,
        animateOut: 'fadeOut'
    });

    $(window).on('load', function() {
		if (('#topnav').length) {
			$('#topnav').load('/partials/topnav/topnav.html', function() { $.getScript('partials/topnav/topnav.js'); });
		};
		if ($('#instagram').length) {
			$('#instagram').load('/partials/instagram/instagram.html')
		};
		if ($('footer').length) {
			$('#footer').load('/partials/footer/footer.html', function() { $.getScript("https://www.google.com/recaptcha/api.js"); })
		};
		
        //masonry
        var blogItems = $('.layout-masonry');
        var portfolioItems = $('.portfolio-layout-masonry');
        var portfolioItems2 = $('.portfolio-layout-masonry2');
        var portfolioItems4 = $('.grid-v4-masonry');

        blogItems.isotope({
            itemSelector: '.blog-item-masonry',
            layoutMode: 'masonry',

        });

        portfolioItems.isotope({
            itemSelector: '.item-portfolio',
            layoutMode: 'masonry',

        });

        portfolioItems2.isotope({
            itemSelector: '.grid-item-style',
            layoutMode: 'fitRows',
        });


        portfolioItems4.isotope({
            itemSelector: '.grid-item-v4',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-item-v4-init'
            }
        });


        // filter items when filter link is clicked
        if ($('.portfolio-filter a').length) {
            $('.portfolio-filter a').on('click', function() {
                $('.portfolio-filter .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                portfolioItems.isotope({
                    filter: selector
                });
                portfolioItems2.isotope({
                    filter: selector
                });
                return false;
            });
        }

    }); //window.load

    $(window).on('scroll', function() {
		if ($(document).scrollTop() > 1 ) {
			$('.main-header').addClass('shadowed');
	//     $('.main-header').addClass('nav-fixed-top');
		} else {
			$('.main-header').removeClass('shadowed');
	//     $('.main-header').removeClass('nav-fixed-top');
		}
    });


    //gallery

    $('.gallery-post a').simpleLightbox({
        heightRatio: 1,
        widthRatio: 0.8

    });


    // faq
    $('.faq-section').hide();
    $('.faq-title').on('click', function() {

        if ($(this).next().is(':hidden')) {

            $(this).toggleClass('active').next().slideDown();
        } else {
            $(this).removeClass('active').next().slideUp();
        }
        return false;
    });


    //fluid width videos

    $(".single-post-content, .custom-page-template, .post-video").fitVids({
        customSelector: "iframe[src^='https://w.soundcloud.com']"
    });


    //scroll up button

    $(".scrollup").hide();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 400) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $("a.scrolltop[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000, 'easeOutExpo');

    });

})(jQuery);