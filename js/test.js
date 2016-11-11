var k1 = document.getElementById("kvadrat1"),
    k2 = document.getElementById("kvadrat2"),
    br = document.querySelector(".kvadrat"),
    slider = document.querySelector("#slajder"),
    i = 0,
    n = 0,
    s = 0;  // counter za svaki element, jer nastaju problemi radi resetiranja ako je svima isti


// update broj
var updateBroj = function() {
    n++;
    k1.innerHTML = n;
    k2.innerHTML = n;
};
setInterval(updateBroj, 1000);

// setTimeout na prvi kvadrat
var k1NovaBoja = function() {
    k1.style.backgroundColor = "red";
};
setTimeout(k1NovaBoja, 3000);

// setInterval na drugi kvadrat
var k2MjenjaBoju = function() {
    var boje = ["#D609BD", "#0957D6", "#09D622", "#FF8000", "#78726F", "#009DFF", "#FF0000"];
    k2.style.backgroundColor = boje[i];
    i++;
    if (i >= boje.length) {
        i = 0;
    }
};
setInterval(k2MjenjaBoju, 2000);

// slider
var sliderr = function() {
    var slika = ["img/001.jpg", "img/002.jpg", "img/003.jpg", "img/004.jpg", "img/005.jpg", "img/006.jpg"];
    slider.setAttribute("src", slika[s]);
    s++;
    if (s >= slika.length) {
        s = 0;
    }
};
setInterval(sliderr, 3000);