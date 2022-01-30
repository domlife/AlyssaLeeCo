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

var loadData = function(callback) {
    if (!sessionStorage.getItem('imagesText') || sessionStorage.getItem('imagesText') == '') {
        jQuery.get('images.txt', function(_data) {
            sessionStorage.setItem('imagesText', _data);
            callback();
        }, 'text');
    } else { callback(); }
}

jQuery('.loadGalleryNames').each(function() {
    var par = jQuery(this)
    loadData(function() {
        let parent = jQuery(par);
        let elem = parent.html();
        jQuery(parent).html('');
        let clone = jQuery(elem).clone();
        let lines = sessionStorage.getItem('imagesText').split('\n');
        let currentType = '', currentGallery = '', folderPath = '';
        for (let i = 0; i < lines.length; i++) {
            let f = lines[i];
            if (f && f.length > 0 && f[0] === '.' && f.split('/').length == 5) {
                folderPath = f.replace('.', '').replace(':', '/');
                let split = f.replace('.', '').replace(':', '/').split('/');
                currentType = split[split.length-3];
                currentGallery = split[split.length-2];
                jQuery(clone).find('a').attr('href', 'gallery.html?g=' + encodeURIComponent(currentGallery)).html(currentGallery);
                parent.append(jQuery(clone).clone());
            }
        }
    });
});
