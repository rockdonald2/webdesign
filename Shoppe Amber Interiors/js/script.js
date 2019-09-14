$(document).ready(() => {
    let hamburger = $(".navbar__checkbox");
    let close = $(".mobile__checkbox");
    let mobileWrapper = $(".mobile--wrapper");
    let navBar = $(".navbar");
    let navbarLeft = $(".navbar--left");
    let searchNavButton = $(".search-btn");
    let searchBar = $(".search");
    let searchBarClose = $(".search__close");
    let backdrop = $(".backdrop");
    let navbarCart = $(".navbar__cart");
    let cartWrapper = $(".cart--wrapper");
    let cartClose = $(".cart__close");
    let myCartBtn = $(".cart-btn");

    hamburger.click(function () {
        mobileWrapper.addClass('nav-slide-in');
        searchBar.removeClass('search-slide-in');
        window.setTimeout(function () {
            backdrop.addClass('visible');
        }, 200);
    });

    close.click(function () {
        mobileWrapper.removeClass('nav-slide-in');
        backdrop.removeClass('visible');
    });

    navbarCart.click(function () {
        cartWrapper.addClass('cart-slide-in');
        window.setTimeout(function () {
            backdrop.addClass('visible');
        }, 200);
    })

    cartClose.click(function () {
        cartWrapper.removeClass('cart-slide-in');
        backdrop.removeClass('visible');
    });

    myCartBtn.click(function () {
        cartWrapper.addClass('cart-slide-in');
        window.setTimeout(function () {
            backdrop.addClass('visible');
        }, 200);
    })

    backdrop.click(function () {
        mobileWrapper.removeClass('nav-slide-in');
        cartWrapper.removeClass('cart-slide-in');
        backdrop.removeClass('visible');
    });

    searchNavButton.click(function () {
        searchBar.addClass('search-slide-in');
        mobileWrapper.removeClass('nav-slide-in');
    });

    searchBarClose.click(function () {
        searchBar.removeClass('search-slide-in');
    });

    $(document).on("keydown", function (e) {
        if (e.keyCode == 27) {
            mobileWrapper.removeClass('nav-slide-in');
            searchBar.removeClass('search-slide-in');
            backdrop.removeClass('visible');
            cartWrapper.removeClass('cart-slide-in');
        }
    })

    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var panel = this.nextElementSibling;
            if (panel.style.height) {
                panel.style.height = null;
                panel.style.display = "none";
            } else {
                panel.style.setProperty("height", "initial");
                panel.style.display = "block";
            }
        });
    }

    let labels = document.getElementsByClassName("label");
    for (let i = 0; i < labels.length; i++) {
        labels[i].addEventListener("click", function () {
            var icon = this.nextElementSibling;

            if (icon.style.transform == "rotate(-180deg)") {
                icon.style.transform = "rotate(0)";
            } else {
                icon.style.transform = "rotate(-180deg)";
            }
        })
    }

    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            if (i == 0) {
                let slideshow = document.getElementsByClassName("slideshow-container");

                slideshow[0].style.setProperty("background", "url(\"../img/photo-2.jpg\") center/cover");

                let captionTitle = document.getElementById("title");

                let captionText = document.getElementById("text");

                captionTitle.innerHTML = "Shoppe the Look";
                captionText.innerHTML = "Introducing Amber's latest project, \"Client Canyon Cool,\" a Los Angeles canyon family home styled with some of our favorite Shoppe pieces.";

                dots[i].classList.add("dot-active");
                dots[i + 1].classList.remove("dot-active");
            } else if (i == 1) {
                let slideshow = document.getElementsByClassName("slideshow-container");

                slideshow[0].style.setProperty("background", "url(\"../img/photo-1.jpg\") center/cover");

                let captionTitle = document.getElementById("title");

                let captionText = document.getElementById("text");

                captionTitle.innerHTML = "Endless Summer Essentials";
                captionText.innerHTML = "Shop our new outdoor essentials, including pillows, door mats, for all your entertaining needs.";

                dots[i].classList.add("dot-active");
                dots[i - 1].classList.remove("dot-active");
            }
        })
    }
});