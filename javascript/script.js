var slides = {
    images: [
        { 
            "caption":"Eco Friendly Backyard",
            "src": "images/Eco-Friendly-Backyard.jpg",
            "backText": "An eco-friendly garden will have more natural features and local plants and trees in it. Instead of stocking your garden with exotic plants, plant local varieties of trees, flowers, and vegetables. These are easier to grow and more eco-friendly as they require fewer chemical fertilizers and pesticides."
        },
        {
            "caption": "English Garden",
            "src": "images/english-garden.jpg",
            "backText": "An English country garden features a series of garden areas connected by paths. English country gardens are all about order. Neatly clipped hedges, clearly defined bed edges and healthy swaths of lush green lawn foster the ambience of an English country garden — and are easily adapted to any size yard"
        },
        {
            "caption": "French Garden",
            "src": "images/french-garden.jpg",
            "backText": "Symmetry and order are the heart of French landscape design. The gardens are also meant to be viewed from a distance, so form and design play a major role. They’re meant to highlight the centerpiece of the entire space, which would be the house. They’re known for their cool color palette, with an emphasis on whites, greens, blues and purples."
        },
        {
            "caption": "Japanese Garden",
            "src": "images/japanese-garden.jpg",
            "backText": "Japanese gardens are characterized by: the waterfall, of which there are ten or more different arrangements; the spring and stream to which it gives rise; the lake; hills, built up from earth excavated from the basin for the lake; islands; bridges of many varieties; and the natural guardian stones."
        },
        {
            "caption": "Meditteranean Garden",
            "src": "images/meditteranean-garden.jpg",
            "backText": "Inspired by the coastal areas of Spain, Italy and France, this style of garden combines relaxed materials and plants with formal accents and designs. Casual elegance where relaxed, weathered materials and plants are mixed with formal accents and trickling water features, are all hallmarks of Mediterranean gardens."
        },
        {
            "caption": "Modern Garden",
            "src": "images/modern-garden.jpg",
            "backText": "A modern or contemporary garden is characterized by a sleek, streamlined and sophisticated style. Generally, modern gardens focus more on the architecture and materials than on the plants and greenery. Geometric shapes and repeating patterns are often employed in contemporary outdoor spaces."
        },
        {
            "caption": "Tropical Garden",
            "src": "images/tropical-garden.jpg",
            "backText": "Tropical garden features tropical plants and requires good rainfall or a decent irrigation or sprinkler system for watering. A tropical garden style is one where everything is large, green and dramatic. Colors tend to take second place in that the overall look is very green but patches of very bright, very dramatic colors can be introduced."
        },
    ]
}

var slideIndex=0;


// Next/previous controls
function plusSlides(imageNumber) {
    showSlides(slideIndex += imageNumber, imageNumber);
}

// Thumbnail image controls
function activeDot(imageNumber) {
    var dots = document.getElementsByClassName("dot");
    var currentImage = document.getElementById("slide-image");
    var captionText = document.getElementsByClassName("caption-text");
    var backText = document.getElementsByClassName("back-text");
    var backHeader = document.getElementsByClassName("back-header");
    
    for (let index = 0; index < dots.length; index++) {
        dots[index].classList.remove("active");
    }
    dots[imageNumber].classList.add("active");
    currentImage.src = slides["images"][imageNumber].src;
    captionText[0].innerHTML = slides["images"][imageNumber].caption;
    backText[0].innerHTML = slides["images"][imageNumber].backText;
    backHeader[0].innerHTML = slides["images"][imageNumber].caption;
}

function showSlides(imageNumber, plusOrMinus) {
    var i;
    var dots = document.getElementsByClassName("dot");
    var currentImage = document.getElementById("slide-image");
    var captionText = document.getElementsByClassName("caption-text");
    var backText = document.getElementsByClassName("back-text");
    var backHeader = document.getElementsByClassName("back-header");


    if (imageNumber === slides["images"].length) { 
        dots[slides["images"].length - 1].classList.remove("active");
        slideIndex = 0;

    }

    if (imageNumber < 0) { 
        dots[0].classList.remove("active");
        slideIndex = slides["images"].length-1;
    }
    

    if (slideIndex !== 0 && plusOrMinus === 1){
        dots[slideIndex - 1].classList.remove("active");
    }

    if ((slideIndex !== slides["images"].length - 1) && plusOrMinus === -1) {
        dots[slideIndex + 1].classList.remove("active");
    }

    dots[slideIndex].classList.add("active");
    currentImage.src=slides["images"][slideIndex].src;
    captionText[0].innerHTML = slides["images"][slideIndex].caption;
    backText[0].innerHTML = slides["images"][slideIndex].backText;
    backHeader[0].innerHTML = slides["images"][slideIndex].caption;

}

function myFunction() {
    if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) { window.location.href = 'https://itunes.apple.com/my/app/flipbizz/idexampleapp'; }

    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) { window.location.href = 'https://play.google.com/store/apps/details?id=com.exampleapp'; }

    //Update #2
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        window.location.href = 'https://www.google.com'; //Desktop Browser
    }
}