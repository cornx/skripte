var p = "#para",
    encrypt = document.getElementById("para"),
    x = "▒";

let a = baffle(p, {
    characters: '~#^*|/█▓▒░█▓▒░█▓▒░',
    speed: 75
})

a.once(); // početno šifriranje

// dešifriranje i kasnije šifriranje
encrypt.addEventListener("click", function() {
    if (event.shiftKey) {
        if (encrypt.innerHTML.indexOf(x) > -1) {
            a.reveal(1000);
        }
    } else {
        a.once();
    }
});



function oznaci() {
    $('#para').each(function() {
        var skrivenaPoruka = $(this).text().replace(/SKRIVENA PORUKA /g, "<span class='poruka'>SKRIVENA PORUKA </span>");
        $(this).html(skrivenaPoruka);
    });
}