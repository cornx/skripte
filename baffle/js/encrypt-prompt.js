var p = "#para",
    encrypt = document.getElementById("para"),
    x = "▒";

let a = baffle(p, {
    characters: '~#^*|/█▓▒░█▓▒░█▓▒░',
    speed: 75
})

a.once(); // početno šifriranje

// var unos = null;
var unos = null;
function sifra() {
    unos = prompt("Upiši šifru kako bi vidio sadržaj");
    if (unos === null || unos === undefined || unos === "") {
        a.once();

    } else if (unos === "šifra") {
        a.reveal(1000);
    }else {
        a.once();
    }
}

setTimeout(function(){sifra();}, 500);
