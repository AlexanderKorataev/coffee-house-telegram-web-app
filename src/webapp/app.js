let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#2cab37";

tg.MainButton.setText("Continue");


let espresso = document.getElementById("espresso");
let cappuccino = document.getElementById("cappuccino");
let latte = document.getElementById("latte");
let earl_grey_tea = document.getElementById("earl_grey_tea");
let lime_frosted_coconut_bar = document.getElementById("lime-frosted_coconut_bar");
let chocolate_brownie = document.getElementById("chocolate_brownie");

let item = "";

espresso.addEventListener("click", function(){
    item = "espresso";
    tg.MainButton.show();
});

cappuccino.addEventListener("click", function(){
    item = "cappuccino";
    tg.MainButton.show();
});

latte.addEventListener("click", function(){
    item = "latte";
    tg.MainButton.show();
});

earl_grey_tea.addEventListener("click", function(){
    item = "earl_grey_tea";
    tg.MainButton.show();
});

lime_frosted_coconut_bar.addEventListener("click", function(){

    item = "lime_frosted_coconut_bar";
    tg.MainButton.show();
});

chocolate_brownie.addEventListener("click", function(){
    item = "chocolate_brownie";
    tg.MainButton.show();
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
