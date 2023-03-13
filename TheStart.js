/*

JQuery Version of Open Side Panel Function

function openSidePanel() {
    var sidePanel = $("#sidePanel"); 
    sidePanel.removeClass("sidePanelHide");
    sidePanel.addClass("sidePanelDisplay");
}
*/

function openSidePanelV2() {
    var sidePanel = document.getElementById("sidePanel");
    sidePanel.classList.remove("sidePanelHide");
    sidePanel.classList.add("sidePanelDisplay");
}

function closeSidePanel() {
    var sidePanel = $("#sidePanel");
    sidePanel.removeClass("sidePanelDisplay");
    sidePanel.addClass("sidePanelHide");
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

/*
function translateText() {
    var inputTextHtmlElement = document.getElementById("newTextInput");
    var inputText = inputTextHtmlElement.value;
    var displaySpan = document.getElementById("displayTextSpan");
    displaySpan.innerHTML = inputText;
}

*/