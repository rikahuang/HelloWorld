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

//when you flip the book, it adds the classlist which allows for flipping of book, if classlist exists, you remove it in order to bring it back to previous page. Flipping works because of argument passed into function but also page degree is different making z-index different
function flipBook(currentPage) {
  var pageNum = document.getElementById("pg" + currentPage);
  if (pageNum.classList.contains("flip-page" + currentPage)) {
    pageNum.classList.remove("flip-page" + currentPage);
  } else {
    pageNum.classList.add("flip-page" + currentPage);
  }
}