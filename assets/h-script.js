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
});