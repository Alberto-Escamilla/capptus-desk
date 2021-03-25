$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


/*SLIDER BRAND*/
$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
/*COLLAPSE INFO*/
$(".caption").click(function() {

    var $body = $(this).closest(".module").find(".body");
    var $icon = $body.siblings('.caption').find('.icon-roll');

    $body.slideToggle(200);

    if ($body.css("display") === 'block' && !($icon.hasClass("rotate"))) {
        $icon.removeClass('rev-rotate').addClass('rotate').addClass('text-info').removeClass('text-dark');
    } else {
        $icon.removeClass('rotate').addClass('rev-rotate').addClass('text-success').removeClass('text-danger');
    }

});