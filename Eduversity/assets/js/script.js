'use strict';



/**
 * element toggle function
 */

const toggleElem = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}



/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});



/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}



/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}

// accessibility js 
var screenReaderEnabled = false;

function toggleAccessibilityMenu() {
    var menu = document.getElementById("accessibilityMenu");
    menu.classList.toggle("active");
}

function toggleScreenReader() {
    screenReaderEnabled = !screenReaderEnabled;
    var menuButton = document.getElementById("screenReaderButton");
    if (screenReaderEnabled) {
        speakText("Screen reader enabled");
        menuButton.innerText = "Disable Screen Reader";
        document.body.classList.add("screen-reader-enabled");
        setTimeout(toggleAccessibilityMenu, 5000);
    } else {

        speakText("Screen reader disabled");
        menuButton.innerText = "Enable Screen Reader";
        document.body.classList.remove("screen-reader-enabled");
        toggleAccessibilityMenu();
    }
    // toggleAccessibilityMenu();
}

function speakText(text) {
    if (screenReaderEnabled) {
        var utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
}

function stopSpeaking() {
    window.speechSynthesis.cancel();
}

// Modal JS

const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector("#close-btn");
const subscribeBtn = document.querySelector("#news-subscribe");
const form = document.querySelector("#modal-form");

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

// Function to handle form submission (you can customize this)
function subscribe(e) {
  e.preventDefault();
  const emailInput = document.querySelector("#modal-email").value;
  // You can add your logic to handle the form submission here
  // alert("Email subscribed: "+emailInput);
  closeModal();
}

form.addEventListener("submit", subscribe)
// closeBtn.addEventListener("click", closeModal);

// Open the modal as soon as the page loads
window.onload = openModal();

