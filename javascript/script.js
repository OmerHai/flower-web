var slides = {
    images: [
        { 
            "caption":"Eco Friendly Backyard",
            "src": "images/Eco-Friendly-Backyard.jpg"
        },
        {
            "caption": "English Garden",
            "src": "images/english-garden.jpg"
        },
        {
            "caption": "French Garden",
            "src": "images/french-garden.jpg"
        },
        {
            "caption": "Japanese Garden",
            "src": "images/japanese-garden.jpg"
        },
        {
            "caption": "Meditteranean Garden",
            "src": "images/meditteranean-garden.jpg"
        },
        {
            "caption": "Modern Garden",
            "src": "images/modern-garden.jpg"
        },
        {
            "caption": "Tropical Garden",
            "src": "images/tropical-garden.jpg"
        },
    ]
}


var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(imageNumber) {
    showSlides(slideIndex += imageNumber);
}

// Thumbnail image controls
function currentSlide(imageNumber) {
    showSlides(slideIndex = imageNumber);
}

function showSlides(imageNumber) {
    var i;
    var dots = document.getElementsByClassName("dot");
    if (imageNumber > slides["images"].length) { slideIndex = 0 }
    if (imageNumber < 1) { slideIndex = slides["images"].length }
    var currentImage = document.getElementsByID("slide-image");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function myFunction() {
    if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) { window.location.href = 'https://itunes.apple.com/my/app/flipbizz/idexampleapp'; }

    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) { window.location.href = 'https://play.google.com/store/apps/details?id=com.exampleapp'; }

    //Update #2
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        window.location.href = 'https://www.google.com'; //Desktop Browser
    }
}