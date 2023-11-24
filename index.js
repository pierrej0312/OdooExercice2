// nav change on scroll
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var triggerHeight = $(window).height() * 0.8;

        if (scrollPosition >= triggerHeight) {
            $('.nav-container').removeClass('bg-primary');
            $('.nav-container').addClass('bg-white');
            $('.navbar .nav-link').each(function () {
                $(this).removeClass('text-white');
            });
            $('.navbar .btn.btn-light:not(.bg-transparent)').removeClass('btn-light').addClass('btn-primary');
            $('.navbar .btn.btn-secondary.bg-transparent').removeClass('btn-secondary').addClass('btn-light');
            $('.navbar-brand .logo-white').removeClass('d-inline-block').addClass('d-none');
            $('.navbar-brand .logo-color').removeClass('d-none').addClass('d-inline-block');
        } else {
            $('.nav-container').removeClass('bg-white');
            $('.nav-container').addClass('bg-primary');
            $('.navbar .nav-link').each(function () {
                $(this).addClass('text-white');
            });
            $('.navbar .btn.btn-primary').removeClass('btn-primary').addClass('btn-light');
            $('.navbar .btn.btn-light.bg-transparent').removeClass('btn-light').addClass('btn-secondary');
            $('.navbar-brand .logo-color').removeClass('d-inline-block').addClass('d-none');
            $('.navbar-brand .logo-white').removeClass('d-none').addClass('d-inline-block');
        }
    });
});

//scroll revelator
$(document).ready(function() {
    // Fonction pour détecter si un élément avec la classe fadeInLeftDiv est partiellement visible à l'écran
    function isPartiallyInView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        var threshold = 200; // Ajustez cette valeur pour déclencher l'animation plus tôt

        return ((elemBottom <= docViewBottom + threshold) && (elemTop >= docViewTop - threshold));
    }

    // Fonction pour ajouter la classe d'animation lorsque l'élément avec la classe fadeInLeftDiv est partiellement visible
    function addAnimationClass() {
        $(".fadeInLeftRevelator, .fadeInRightRevelator, .fadeInBottomRevelator").each(function() {
            if (isPartiallyInView(this)) {
                $(this).removeClass("hidden").addClass("animate__animated");
                if ($(this).hasClass("fadeInLeftRevelator")) {
                    $(this).addClass("animate__fadeInLeft");
                } else if ($(this).hasClass("fadeInRightRevelator")) {
                    $(this).addClass("animate__fadeInRight");
                } else if ($(this).hasClass("fadeInBottomRevelator")) {
                    $(this).addClass("animate__fadeInUp");
                }
            }
        });
    }
    $(window).on('scroll', addAnimationClass);
    addAnimationClass();
});

//fill heart
function heartFill() {
    //changement de class bi-heart-fill
}


//GSAP ANIMATE PATH DRAWING

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    var theLine = document.querySelector('.theLine');
    var lineLength = theLine.getTotalLength();

    // Hide the line initially
    gsap.set(theLine, { strokeDasharray: lineLength, strokeDashoffset: lineLength });

    ScrollTrigger.create({
        trigger: '#layer',
        start: 'top center',
        end: 'bottom center',
        onUpdate: function (self) {
            var progress = self.progress;
            var drawLength = lineLength * progress;
            gsap.set(theLine, { strokeDashoffset: lineLength - drawLength });
        }
    });
});