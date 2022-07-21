$(".hamburger-btn").click(() => {
    $(".mobile-menu").toggleClass("open");
});

$(".slider").slick({
    dots: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    dotsClass: "slick-dots-btn",
    /*initialSlide: 1,*/
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    edgeFriction: 0,
    pauseOnFocus: false,
});

$(".testimonial-slider").slick({
    dots: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    dotsClass: "testimonial-slick-dots-btn",
});
const counterUp = window.counterUp.default;

const callback = (entries) => {
    entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
            document.querySelectorAll(".counter").forEach((item) => {
                counterUp(item, {
                    duration: 2000,
                    delay: 16,
                });
            });
        }
    });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

const el = document.querySelector(".counter");
IO.observe(el);
// el.forEach((el) => {
//     IO.observe(el);
// });
