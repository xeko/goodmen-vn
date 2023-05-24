$(function () {
    var $btn = $('.category-btn [data-filter]'),
            $list = $('.category-list [data-category]');

    $btn.on('click', function (e) {
        e.preventDefault();

        var $btnCat = $(this).attr('data-filter');
        $list.removeClass('is-animate');

        if ($btnCat === 'all') {

            $list.fadeOut().promise().done(function () {
                $list.addClass('is-animate').fadeIn();
            });

        } else {

            $list.fadeOut().promise().done(function () {
                $list.filter('[data-category = "' + $btnCat + '"]').addClass('is-animate').fadeIn();
            });

        }
    });
    
    $('.accordion-header').click(function (e) {
        let currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            $('.accordion .accordion-header').removeClass('active');
            $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
        } else {
            $('.accordion .accordion-header').removeClass('active');
            $('.accordion .accordion-section-content').slideUp(300).removeClass('open');

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});
