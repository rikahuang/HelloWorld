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

/* Beginner Method:

function openFAQ(FAQNum) {
    if (FAQNum=="1") {
        var FAQ = document.getElementById("faqAnswer1");
        FAQ.classList.remove("faqHide");
        var minus = document.getElementById("minusBtn1");
        minus.classList.remove("hide");
        var carrot = document.getElementById("carrot1");
        carrot.classList.add("hide");
    } else if (FAQNum=="2") {
        var FAQ = document.getElementById("faqAnswer2");
        FAQ.classList.remove("faqHide");
        var minus = document.getElementById("minusBtn2");
        minus.classList.remove("hide");
        var carrot = document.getElementById("carrot2");
        carrot.classList.add("hide");
    } else if (FAQNum=="3") {
        var FAQ = document.getElementById("faqAnswer3");
        FAQ.classList.remove("faqHide");
        var minus = document.getElementById("minusBtn3");
        minus.classList.remove("hide");
        var carrot = document.getElementById("carrot3");
        carrot.classList.add("hide");
    }
}

*/

function openFAQ(FAQNum) {
    var FAQ = document.getElementById("faqAnswer" + FAQNum);
    FAQ.classList.remove("faqHide");
    var minus = document.getElementById("minusBtn" + FAQNum);
    minus.classList.remove("hide");
    var carrot = document.getElementById("carrot" + FAQNum);
    carrot.classList.add("hide");
}

/* Beginner Method:

function closeFAQ(FAQNum) {
    if (FAQNum=="1") {
        FAQNum = document.getElementById("faqAnswer1");
        FAQNum.classList.add("faqHide");
        var minus = document.getElementById("minusBtn1");
        minus.classList.add("hide");
        var carrot = document.getElementById("carrot1");
        carrot.classList.remove("hide");
    } else if (FAQNum=="2") {
        FAQNum = document.getElementById("faqAnswer2");
        FAQNum.classList.add("faqHide");
        var minus = document.getElementById("minusBtn2");
        minus.classList.add("hide");
        var carrot = document.getElementById("carrot2");
        carrot.classList.remove("hide");
    } else if (FAQNum="3") {
        FAQNum = document.getElementById("faqAnswer3");
        FAQNum.classList.add("faqHide");
        var minus = document.getElementById("minusBtn3");
        minus.classList.add("hide");
        var carrot = document.getElementById("carrot3");
        carrot.classList.remove("hide");
    }
}

*/

function closeFAQ(FAQNum) {
    var FAQ = document.getElementById("faqAnswer" + FAQNum);
    FAQ.classList.add("faqHide");
    var minus = document.getElementById("minusBtn" + FAQNum);
    minus.classList.add("hide");
    var carrot = document.getElementById("carrot" + FAQNum);
    carrot.classList.remove("hide");
}

var questions = [
    "how old are you?",
    "which organization did you come from?",
    "how much was the adoption?",
    "do you shed a lot?",
    "were you potty-trained before adoption?"
];

var answers = [
    "i am currently 4 years old. i was born on april 27th, 2018. my birthday is coming up, so please be prepared to send me a present!",
    'i came from an organization located in vancouver, called "second chance in life". originally i was from taiwan, but was rescued and brought to vancouver by some amazing people!',
    "the adoption fee was $500, which included a doggy vaccine passport, crate, jacket, and of course, i was neutered and up-to-date on all my vaccines! because i was flying from vancouver to toronto, the plane ticket was also $500!",
    "i shed seasonally, so that means 4 times a year",
    "yes, the organization that i came from taught me to peepee and poopoo outside!"
];

function faqList() {
    for (a=0; a<questions.length; a++) {
        var empty = document.createElement("div");
        empty.classList.add("empty2");
        empty.innerHTML = "&nbsp;";

        var question = document.createElement("div");
        question.classList.add("question");
        question.innerHTML = questions[a];

        var icon1 = document.createElement("i");
        icon1.classList.add("fa-solid");
        icon1.classList.add("fa-caret-down");
        icon1.classList.add("dropDown");
        var b = a + 1;
        icon1.id = "carrot" + b;
        icon1.setAttribute("onclick", "openFAQ(" + b + ")");

        var icon2 = document.createElement("i");
        icon2.classList.add("fa-solid");
        icon2.classList.add("fa-minus");
        icon2.classList.add("hide");
        icon2.classList.add("dropDown");
        icon2.id = "minusBtn" + b;
        icon2.setAttribute("onclick", "closeFAQ(" + b + ")");

        var faqQs = document.createElement("div");
        faqQs.classList.add("faqQs")
        if (a==0) {
            faqQs.classList.add("faqFirst");
        } else if (a==questions.length - 1) {
            faqQs.classList.add("faqLast");
        }

        faqQs.appendChild(empty);
        faqQs.appendChild(question);
        faqQs.appendChild(icon1);
        faqQs.appendChild(icon2);

        var ansInner = document.createElement("div");
        ansInner.classList.add("answerInner");
        ansInner.classList.add("cursorDefault");
        ansInner.innerHTML = answers[a];

        var ansBox = document.createElement("div");
        ansBox.classList.add("answer");

        ansBox.appendChild(ansInner);

        var faqAs = document.createElement("div");
        faqAs.classList.add("faqAs");
        faqAs.classList.add("faqHide");
        faqAs.id = "faqAnswer" + b;

        faqAs.appendChild(ansBox);

        var pageBtm = document.getElementById("pageBTM");
        
        pageBtm.appendChild(faqQs);
        pageBtm.appendChild(faqAs);

    }
}

window.addEventListener("load", function() {
    faqList();
})
