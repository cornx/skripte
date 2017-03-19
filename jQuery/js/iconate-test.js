// array animacija
let animacija = [{ // naprijed [0]
    from: 'fa-bars',
    to: 'fa-arrow-right',
    animation: 'rubberBand'
}, { // nazad [1]
    from: 'fa-arrow-right',
    to: 'fa-bars',
    animation: 'tada'
}, { // naprijed [2]
    from: 'fa-home',
    to: 'fa-bars',
    animation: 'fadeOut'
}, { // nazad [3]
    from: 'fa-bars',
    to: 'fa-home',
    animation: 'fadeOut'
}, { // naprijed [4]
    from: 'fa-envelope-o',
    to: 'fa-envelope-open-o',
    animation: 'fadeOut'
}, { // nazad [5]
    from: 'fa-envelope-open-o',
    to: 'fa-envelope-o',
    animation: 'fadeOut'
}, { // naprijed [6]
    from: 'fa-globe',
    to: 'fa-telegram',
    animation: 'fadeOut'
}, { // nazad [7]
    from: 'fa-telegram',
    to: 'fa-globe',
    animation: 'fadeOut'
}];

// $(".prva").hover(function prvaIn() {
//     iconate(this, animacija[0]); // hover in
// }, function prvaOut() { // hover out
//     iconate(this, animacija[1]);
// });

// generična funkcija temeljena na gornjem kodu
function animiraj(elem, animIn, animOut) { // elem = DOM element, animIn = ulazna animacija, animOut = izlazna animacija
    $(elem).hover(function animacijaIn() {
        iconate(this, animIn); // iconate funkcija (element, ulazna animacija)
    }, function animacijaOut() {
        iconate(this, animOut); // iconate funkcija (element, izlazna animacija)
    });
};
animiraj(".prva", animacija[0], animacija[1]); // pozivanje funkcije
animiraj(".druga", animacija[2], animacija[3]);
// animiraj(".treca", animacija[4], animacija[5]);

// vanilla js --> isti kod kao i jQUery smao u čitoj JavaScript
function animirajJS(elem, animIn, animOut) {
    let e = document.querySelector(elem);
    e.onmouseover = function() {
        iconate(this, animIn);
    };
    e.onmouseout = function() {
        iconate(this, animOut)
    };
};
animirajJS(".treca", animacija[4], animacija[5]);


// vanilla js --> klik
function animirajKlikomJS(elem, animIn, animOut) { // 3 argumenta, DOM element, ulazna i izlazna animacija
    let e = document.querySelector(elem); // spremamo element u varijablu
    e.onclick = function() { // onclick event
        if (e.classList.contains(animIn.from)) { // ako element ima class koji se nalazi u from unutar objekta
            iconate(this, animIn); // onda primjeni tu animaciju
        } else { // ako ne sadrži animIn.from, znači da je već primjenjena naimacija
            iconate(this, animOut); // vrati animaciju na prethodnu
        }
    };
}
animirajKlikomJS(".cetvrta", animacija[4], animacija[5]);


// jQuery --> klik
function animirajKlikomJQuery(elem, animIn, animOut) { // elem = DOM element, animIn = ulazna animacija, animOut = izlazna animacija
    $(elem).click(function() {
        if ($(elem).hasClass(animIn.from)) { // provjeri class
            iconate(this, animIn); // iconate funkcija (element, ulazna animacija)
        } else {
            iconate(this, animOut); // iconate funkcija (element, izlazna animacija)
        }
    });
};
animirajKlikomJQuery(".peta", animacija[6], animacija[7]);
