(function($) {
    "use strict";
	var elem = $('.loadGalleries');
	if (elem.length) {
		console.log(elem);
		$.get('images.txt', function(data) {
			var files = data.split('\n');
			console.log(data);
		}, 'text');
		// const xhttp = new XMLHttpRequest();
	
		// xhttp.onreadystatechange = function() {
		//     if (this.readyState == 4 && this.status == 200) {
		//         const fileList = this.responseText.split('\n');
		//         let currentFolder = '';
	
		//         const filePaths = fileList
		//             .map(f => {
		//                 let filePath = '';
	
		//                 if (f) {
		//                     if (f[0] === '.') {
		//                         currentFolder = f.replace('.', '').replace(':', '/');
		//                     }
		//                     else if (f[f.length - 1] !== '/') {
		//                         filePath = `${location.href}${currentFolder}${f}`;
		//                     }
		//                 }
			  
		//                 return filePath;
		//             })
		//             .filter(f => f);
		  
		//         const imagesContainer = document.getElementById('images');
		  
		//         filePaths.map(f => { // Create and put images to the DOM
		//             const img = document.createElement('IMG');
		//             img.src = f;
		//             imagesContainer.appendChild(img);
		//         });
		//     }
		// };
	
		// xhttp.open("GET", "images.txt", true);
		// xhttp.send();
	}

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
		if ($('#topnav').length) {
			$('#topnav').load('/partials/topnav/topnav.html');
		};
		if ($('#footer').length) {
			$('#footer').load('/partials/footer/footer.html')
		};
		if ($('#instagram').length) {
			$('#instagram').load('/partials/instagram/instagram.html')
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
        //   if ($(document).scrollTop() > 1 ) {
        //     $('.main-header').addClass('nav-fixed-top');
        // 	} else {
        //     $('.main-header').removeClass('nav-fixed-top');
        //   }

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