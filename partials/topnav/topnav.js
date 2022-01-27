jQuery("a[href='" + location.pathname.replace('/', '') + "']").each(function(){
    jQuery(this).closest('li').addClass("current-menu-item");
});
//mobile menu
jQuery('.nav-button').on('click', function(e) {

    e.preventDefault();

    jQuery('.mobile-menu-holder, .menu-mask').addClass('is-active');
    jQuery('body').addClass('has-active-menu');

});

jQuery('.exit-mobile, .menu-mask').on('click', function(e) {

    e.preventDefault();

    jQuery('.mobile-menu-holder, .menu-mask').removeClass('is-active');
    jQuery('body').removeClass('has-active-menu');

});

jQuery('.menu-mobile > li.menu-item-has-children > a').on('click', function(e) {

    e.preventDefault();
    e.stopPropagation();

    if (jQuery(this).parent().hasClass('menu-open'))

        jQuery(this).parent().removeClass('menu-open');

    else {

        jQuery(this).parent().addClass('menu-open');

    }

});

// end mobile menu

// menu edge screen turn left

jQuery(".menu-nav li").on('mouseenter mouseleave', function(e) {
    if (jQuery('ul', this).length) {
        var elm = jQuery('.sub-menu', this);
        var off = elm.offset();
        var l = off.left;
        var w = elm.width();
        var docW = jQuery(window).width();

        var isEntirelyVisible = (l + w <= docW);

        if (!isEntirelyVisible) {
            jQuery(this).addClass('edge');
        } else {
            jQuery(this).removeClass('edge');
        }
    }
});