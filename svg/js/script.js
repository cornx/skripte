document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var aptBtn = document.getElementById("apartmani"),
        plodineBtn = document.getElementById("plodine"),
        pleterBtn = document.getElementById("pleter"),
        danijelBtn = document.getElementById("danijel"),
        labirintBtn = document.getElementById("labirint"),
        labirintBtnRjesenje = document.getElementById("labirint-rjesenje"),
        main = document.querySelector("#main");

    // klikni za prikaz  
    pleterBtn.addEventListener("click", function() {
        //main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            if (main.classList == "plodine") {
                main.classList = "";
            }
        };
        new Vivus(main, {
            file: "img/pleter.svg",
            duration: 5000,
        }, false);
    });


    plodineBtn.addEventListener("click", function() {
        // main.innerHTML = "";

        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "plodine";
        };

        new Vivus(main, {
            file: "img/plodine.svg",
            duration: 200,
        }, false);
    });

    // klikni za prikaz apartmana
    aptBtn.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "";
        };
        new Vivus(main, {
            file: "img/apt_proboj.svg",
            duration: 200,
            type: "oneByOne"
        });
    });

    danijelBtn.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "";
        };
        new Vivus(main, {
            file: "img/ime.svg",
            duration: 200,
            /*type: "oneByOne"*/
        });
    });
    labirintBtn.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "labirint";
        };
        new Vivus(main, {
            file: "img/labirint.svg",
            duration: 100,
            /*type: "oneByOne"*/
        });
    });
    labirintBtnRjesenje.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "labirint-rjesenje";
        };
        new Vivus(main, {
            file: "img/labirint-rjesenje.svg",
            duration: 400,
            /*type: "oneByOne"*/
        });
    });
});