$(document).ready(function() {
    // Particles Init
    if ($('#particles-js').length) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 5, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { repulse: { distance: 200 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    }

    // Preloader
    $(window).on('load', function() {
        $("#preloader").fadeOut(500, function() {
            $(this).hide();
        });
    });

    // Slick Slider
    $(".featured-apps-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 993, settings: { slidesToShow: 4 } },
            { breakpoint: 650, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
            { breakpoint: 321, settings: { slidesToShow: 1 } }
        ]
    });

    // Search Filter
    $("#search-input").keyup(function() {
        var value = $(this).val().toLowerCase();
        $(".listing-content .listing-item-wrapper").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // Popup Close
    $("#s-ex").click(function() {
        $("#loading_page").addClass("hide");
    });

    // App Data Mapping Function
    function openAppModal(name, rating, downloads, icon, text) {
        $("#loading_page").removeClass("hide");
        $("#app_icon").attr("src", icon);
        $('#app_rating').text(rating);
        $('#app_down').text(downloads);
        $('#app_name').text(name);
        $('#app_text').text(text);
        $('#app-step-by').text('brixa.site');
    }

    // Event Listeners for Apps
    $("#efootball, #efootball0").click(function() {
        openAppModal('eFootball™ 2024', '4.9', '890K', 'https://i.postimg.cc/CM7vb7Qm/t-Hc-Pws9zk7mm.jpg', 'Inject 60M Coins and 60K points, designed for iOS and Android.');
    });

    $("#forzahorizon, #forzahorizon0").click(function() {
        openAppModal('Forza Horizon 5 Mobile', '4.8', '1.2M', 'https://i.postimg.cc/zvz09HVC/Forza-Horizon-5-1.jpg', 'Enjoy limitless game provisions with our tailored app, functioning on both iOS and Android.');
    });

    $("#gta6, #gta60").click(function() {
        openAppModal('GTA 5 Mobile', '4.6', '340K', 'https://i.postimg.cc/Twqt7JY2/gta5v.png', 'Attain boundless game supplies using our specialized app, suitable for iOS and Android');
    });

    $("#pubgmob, #pubgmob0").click(function() {
        openAppModal('PUBG MOBILE Us And Skins', '4.7', '850K', 'https://i.postimg.cc/CxBmTgLQ/YCEsoy-BV1-BJJ.jpg', 'Obtain limitless resources for PUBG Mobile using our tweaked ++ app, suitable for both iOS and Android!');
    });

    $("#beamng, #beamng0").click(function() {
        openAppModal('Beamng Drive', '4.6', '953K', 'https://i.postimg.cc/PrF2RxhD/beamng.jpg', 'Get unlimited resources for Beamng Drive that works for both iOS & Android devices.');
    });

    $("#fc24, #fc240").click(function() {
        openAppModal('FC Mobile 24', '4.9', '1.4M', 'https://i.postimg.cc/sgkK3NMD/XMb-OQh-HY3kimage-2023-12-07-181345295.png', 'FC Mobile 24 Access limitless in-game items with our unique app, designed for iOS and Android.');
    });

    $("#block, #block0").click(function() {
        openAppModal('Block Blast!', '4.4', '49K', 'https://i.postimg.cc/Kz9WN5YX/unnamed-3.webp', 'Get unlimited resources for Block Blast! that works for both iOS & Android devices.');
    });

    $("#cookingdom, #cookingdom0").click(function() {
        openAppModal('Cookingdom', '4.7', '1.1M', 'https://i.postimg.cc/TwWkVvBb/cookingdom.webp', 'Get infinite resources for Cookingdom Premium, supporting well for iOS and Android devices.');
    });

    $("#farm, #farm0").click(function() {
        openAppModal('Farm Manager - 2025', '4.5', '533K', 'https://i.postimg.cc/q7ZJt2dR/Farmer.webp', 'Get unlimited resources for Farm Manager - 2025 that works for both iOS & Android devices.');
    });

    $("#racinglegend, #racinglegend0").click(function() {
        openAppModal('Racing Legends Offline', '4.8', '461K', 'https://i.postimg.cc/x86tYjzW/Racing-Legends-Mod-apk-An1.webp', 'Unlock a treasure trove of free resources for Racing Legends Offline app - for iOS & Android.');
    });
});
