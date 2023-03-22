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

function showSentMsg() {
    var fName = document.getElementById("firstName");
    var lName = document.getElementById("lastName");
    var email = document.getElementById("emailAdd");
    var phone = document.getElementById("phoneNum");
    var messageBox = document.getElementById("msgBox");

    if (fName.value=="" || lName.value=="" || email.value=="" || phone.value=="" || messageBox.value=="") {
        var errorMsg = document.getElementById("errorMsg");
        errorMsg.classList.remove("hide");
    } else {
        var heading = document.getElementById("cHeading");
        heading.classList.add("hide");
        var form = document.getElementById("cBottom");
        form.classList.add("hide");
        var sentMessage = document.getElementById("sentMsg");
        sentMessage.classList.remove("widthHide");
    }
}