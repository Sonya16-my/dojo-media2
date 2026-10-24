const servicesSwiper = new Swiper('.services-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    watchOverflow: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            spaceBetween: 11
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 24
        }
    }
});

document.querySelectorAll('.swiper-custom-arrow').forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        servicesSwiper.slideNext();
    });
});