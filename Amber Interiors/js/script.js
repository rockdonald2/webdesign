$(document).ready(() => {
    let backdrop = $(".backdrop");
    let menuTrigger = $("#menu-trigger");
    let closeTrigger = $("#close-trigger");
    let logoTrigger  = $("#logo");
    let sideway = $(".menu--sideway");
    let wallpaper = $(".wallpaper");
    let menuLeft = $(".menu--left");
    let menuRight = $(".menu--right");

    menuTrigger.click(function () {
        sideway.removeClass('hide');

        window.setTimeout(function () {
            backdrop.addClass('show');
            menuLeft.addClass('slide-in');
            menuRight.addClass('slide-in');
        }, 300);

        menuTrigger.addClass('hide');
        closeTrigger.addClass('show');
    });

    logoTrigger.click(function () {
        sideway.removeClass('hide');

        window.setTimeout(function () {
            backdrop.addClass('show');
            menuLeft.addClass('slide-in');
            menuRight.addClass('slide-in');
        }, 300);

        menuTrigger.addClass('hide');
        closeTrigger.addClass('show');
    });

    backdrop.click(function () {
        backdrop.removeClass('show');
        menuLeft.removeClass('slide-in');
        menuRight.removeClass('slide-in');

        window.setTimeout(function () {
            sideway.addClass('hide');
        }, 700);

        menuTrigger.removeClass('hide');
        closeTrigger.removeClass('show');
    });

    closeTrigger.click(function () {
        backdrop.removeClass('show');
        menuLeft.removeClass('slide-in');
        menuRight.removeClass('slide-in');

        window.setTimeout(function () {
            sideway.addClass('hide');
        }, 700);

        menuTrigger.removeClass('hide');
        closeTrigger.removeClass('show');
    });

    wallpaper.click(function () {
        sideway.removeClass('hide');

        window.setTimeout(function () {
            backdrop.addClass('show');
            menuLeft.addClass('slide-in');
            menuRight.addClass('slide-in');
        }, 300);

        menuTrigger.addClass('hide');
        closeTrigger.addClass('show');
    });
});