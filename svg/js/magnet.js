document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var main = document.querySelector("#main"),
        naslov = document.querySelector("#naslov");
    (function() {
        new Vivus(main, {
            file: "img/magnet.svg",
            duration: 200,
             /*type: "oneByOne"*/
        });
        /*new Vivus(naslov, {
            file: "img/naslov.svg",
            duration: 200
        });*/
    })();
});