let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#2cab37";

tg.MainButton.setText("Continue");

let item = "";

let espresso = document.getElementById("espresso");
let cappuccino = document.getElementById("cappuccino");
let latte = document.getElementById("latte");
let earl_grey_tea = document.getElementById("earl_grey_tea");
let lime_frosted_coconut_bar = document.getElementById("lime-frosted_coconut_bar");
let chocolate_brownie = document.getElementById("chocolate_brownie");

espresso.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        item = "espresso";
        tg.MainButton.show();
    }
});

espresso.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        item = "cappuccino";
        tg.MainButton.show();
    }
});

espresso.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        item = "latte";
        tg.MainButton.show();
    }
});

espresso.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        item = "earl_grey_tea";
        tg.MainButton.show();
    }
});

espresso.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        item = "lime_frosted_coconut_bar";
        tg.MainButton.show();
    }
});

espresso.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        item = "chocolate_brownie";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});