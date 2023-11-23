$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.navbar').removeClass('bg-transparent');
            $('.navbar').addClass('bg-white');
        } else {
            $('.navbar').removeClass('bg-white');
            $('.navbar').addClass('bg-transparent');
        }
    });
});