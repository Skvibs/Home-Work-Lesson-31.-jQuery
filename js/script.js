$(function () {
    $(".head").on("click", function () {
        let elem = $(this).next();
        $(".body").not(elem).slideUp();
        elem.slideToggle();
    })
});
