var state = "black";

var messageState = "hidden";
var isMessageHidden = true;

function openSidePanel() {
    var sidePanel = $("#sidePanel"); 
    sidePanel.removeClass("sidePanelHide");
    sidePanel.addClass("sidePanelDisplay");
}

function closeSidePanel() {
    var sidePanel = $("#sidePanel");
    sidePanel.removeClass("sidePanelDisplay");
    sidePanel.addClass("sidePanelHide");
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

function onCalculator() {
    var onCalc = $(".calc");
    onCalc.removeClass("displayHide");
    onCalc.addClass("displayShow");
    state = "on";
}

function offCalculator() {
    var offCalc = $(".calc");
    offCalc.addClass("displayHide");
    offCalc.removeClass("displayShow");
    resetCalc();
    state = "black";
}

/*

Used below function instead 

function pressOne() {
    var btnOne = document.getElementById("btnOne");
    var btnShow = btnOne.innerHTML;
    var numDisplay = document.getElementById("humanAge");
    numDisplay.value = numDisplay.value + btnShow;
}
*/

function pressNum(pressedNum) {
    if (state=="black") {
        pressedNum = "";
    }
    var numDisplay = document.getElementById("humanAge");
    numDisplay.value = numDisplay.value + pressedNum;
}

function resetCalc() {
    var numDisplay = document.getElementById("humanAge");
    numDisplay.value = "";
    var dogAgeCalced = document.getElementById("dogAge");
    dogAgeCalced.innerHTML = "";
}

function deleteNum() {
    var numDisplay = document.getElementById("humanAge");
    var deleteNum = numDisplay.value;
    var newNum = deleteNum.substring(0, deleteNum.length - 1);
    numDisplay.value = newNum; 
}

/*

Used below function instead 

function computeDogAge() {
    var numDisplay = document.getElementById("humanAge");
    var dogAgeShow = numDisplay.value;
    var dogAgeCalced = document.getElementById("dogAge");
    dogAgeCalced.innerHTML = dogAgeShow;
}
*/

function convertAge() {
    var numDisplay = document.getElementById("humanAge"); 
    var dogAgeDisplay = document.getElementById("dogAge"); 
    dogAgeDisplay.innerHTML = Math.round(numDisplay.value / 7);
}

/*

Another method to do the same function as above, more complex but will be applicable in more complex situations

function calculateDogAge(humanAge) {
    var dogAge = humanAge / 7;
    return dogAge;
}

function computeDogAge() {
    var numDisplay = document.getElementById("humanAge");
    var dogAgeDisplay = document.getElementById("dogAge");
    dogAgeDisplay.innerHTML = calculateDogAge(numDisplay.value);
}

*/

/* Another method to do this, below is a better method for when there's only two states, use buleon (true/false)

function helpMe() {
    if (messageState=="hidden") {
        var info = document.getElementById("helpPlz");
        info.classList.remove("hide");
        messageState="show";
    } else if (messageState=="show") {
        var info = document.getElementById("helpPlz");
        info.classList.add("hide");
        messageState="hidden";
    }
}*/

function helpMe() {
    if(isMessageHidden) {
        var info = document.getElementById("helpPlz");
        info.classList.remove("hide");
        isMessageHidden = false;
    } else {
        var info = document.getElementById("helpPlz");
        info.classList.add("hide");
        isMessageHidden = true;
    }
}