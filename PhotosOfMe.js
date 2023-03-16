var gallery = [
    {
        "image": "IMG_2220.JPG",
        "caption": "flowa powa",
        "class": "frameLt"
    },
    {
        "image": "IMG_0551.jpg",
        "caption": "my handsome side profile",
        "class": "frameRt"
    },
    {
        "image": "IMG_0881.jpg",
        "caption": "cheese!!!",
        "class": "frameLt"
    },
    {
        "image": "IMG_1691.JPG",
        "caption": "me so handsome",
        "class": "frameRt"
    },
    {
        "image": "IMG_9025.JPG",
        "caption": "fluffy fluffy snow",
        "class": "frameLt"
    },
    {
        "image": "IMG_9355.jpg",
        "caption": "snowdog mochi",
        "class": "frameRt"
    },
];

function openSidePanelV2() {
    var sidePanel = document.getElementById("sidePanel");
    sidePanel.classList.remove("sidePanelHide");
    sidePanel.classList.add("sidePanelDisplay");
}

function closeSidePanel() {
    var sidePanel = document.getElementById("sidePanel");
    sidePanel.classList.remove("sidePanelDisplay");
    sidePanel.classList.add("sidePanelHide");
}

function homePage() {
    window.open("index.html", "_self");
}

function diaryPage() {
    window.open("DearDiary.html", "_self");
}

function galleryPage() {
    window.open("PhotosOfMe.html", "_self");
}

function contactPage() {
    window.open("ReachOut.html", "_self");
}

function calculatorPage() {
    window.open("Calculator.html", "_self");
}

function faqPage() {
    window.open("FAQ.html", "_self");
}

function loadGallery() {
    var galleryIndex = 0;

    for (var r=0; r<3; r++) {
        
        var row = document.createElement("div");
        row.classList.add("galleryRow");

        for (var c=0; c<2; c++) {
            
            var pic = document.createElement("img");
            pic.src = gallery[galleryIndex].image;
            pic.classList.add("imgSize");

            var innerFrame = document.createElement("div");
            innerFrame.classList.add("picFrameInner");

            innerFrame.appendChild(pic);

            var cap = document.createElement("div");
            cap.classList.add("caption");
            cap.innerHTML = gallery[galleryIndex].caption;

            var outerFrame = document.createElement("div");
            outerFrame.classList.add("picFrame");
            outerFrame.classList.add("pointer");
            outerFrame.classList.add(gallery[galleryIndex].class);

            outerFrame.appendChild(innerFrame);
            outerFrame.appendChild(cap);

            row.appendChild(outerFrame);

            galleryIndex = galleryIndex + 1;
            
        }

        var mainGallery = document.getElementById("MG");
        mainGallery.appendChild(row);

    }
}

window.addEventListener("load", function(){
    loadGallery();
})

