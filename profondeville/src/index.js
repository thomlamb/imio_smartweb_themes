import "./scss/main.scss";
$( document ).ready(function() {
    $('#portal-globalnav-collapse').on('show.bs.collapse', function () {
        document.body.classList.add('open-nav-overflow');
        document.documentElement.classList.add('open-nav-overflow');
    })
    $('#portal-globalnav-collapse').on('hidden.bs.collapse', function () {
        document.body.classList.remove('open-nav-overflow');
        document.documentElement.classList.remove('open-nav-overflow');
    })

    // For custom slider
    if($('.sectionnews .swiper').length > 0){
        var newsSwiper = $('.sectionnews .swiper')[0].swiper
        newsSwiper.params.spaceBetween=30;
        newsSwiper.params.speed=1000,
        newsSwiper.update();
    }
    if($('.sectionevents .swiper').length > 0){
        var eventsSwiper = $('.sectionevents .swiper')[0].swiper
        eventsSwiper.params.spaceBetween=30;
        eventsSwiper.params.speed=1000,
        eventsSwiper.update();
    }

    if($('.sectioncollection .swiper').length > 0){
        var collectionSwiper = $('.sectioncollection .swiper')[0].swiper
        collectionSwiper.params.spaceBetween=60;
        collectionSwiper.params.speed=1000,
        collectionSwiper.update();
    }

    // For banner

    let checkBanner = document.querySelector("#portal-header #banner");
    let headerCustom = document.getElementById("portal-header");

    if (checkBanner != null) {
       headerCustom.classList.add("header-custom");
    }
});