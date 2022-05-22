window.onload = function() {
    setInterval(() => {
        document.querySelector(".preloader").style.opacity = "0";
    }, 3000)
}

function openNav() {
    console.log("heloo")
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.opacity = "1";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.opacity = "0";
}

const tab = document.querySelectorAll(".service-tabs-list");
const content = document.querySelectorAll(".tab-content .row");
for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = () => {
        for (let j = 0; j < content.length; j++) {
            content[j].classList.remove("active");
            content[j].classList.remove("animate__animated")
            content[j].classList.remove("animate__zoomIn");
        }
        const tabId = tab[i].getAttribute("tab-id");
        for (let k = 0; k < content.length; k++) {
            if (tabId == content[k].getAttribute("content-tab")) {
                content[k].classList.add("active");
                content[k].classList.add("animate__animated");
                content[k].classList.add("animate__zoomIn");
            }
        }
    }
}
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.image-link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});