let tg = window.Telegram.WebApp;

tg.expand();

let espresso = document.getElementById("espresso");

espresso.addEventListener("click", tg.sendData("espresso"));
