$(function () {
    const $window = $(window);
    const $header = $("header");
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300;

    // GNB
    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("active");
        $submenu.stop().slideDown(duration);
    });

    $menu.on("mouseleave", function () {
        $(this).removeClass("on");
        $header.removeClass("active");
        $submenu.stop().slideUp(duration);
    });

    // 마우스 휠을 조작했을 때
    $window.on("wheel", function (e) {
        // console.log(e);

        // if (e.originalEvent.wheelDelta > 0) {
        //     // 휠을 올렸을때
        //     $header.removeClass("hide");
        // } else {
        //     // 휠을 내렸을때
        //     $header.addClass("hide");
        // }

        // 삼항조건연산자
        // 조건 ? 참일때 동작 : 거짓일때 동작
        e.originalEvent.wheelDelta > 0
            ? $header.removeClass("hide")
            : $header.addClass("hide");
    });
});
