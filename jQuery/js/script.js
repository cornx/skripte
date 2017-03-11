var route = {
    _routes: {}, // The routes will be stored here
    add: function(url, action) {
        this._routes[url] = action;
    },
    run: function() {
        jQuery.each(this._routes, function(pattern) {
            if (location.href.match(pattern)) {
                // "this" points to the function to be executed
                this();
            }
        });
    }
}


// provjeri postoji li neki element na stranici
jQuery.fn.exists = function() {
    return this.length > 0;
}

var kvadrat = $(".kvadrat");
// kod za index.html
route.add("index.html", function samoNaPrvoj() {
    console.log("ovo bi trebalo samo na index.html prikazat");

    kvadrat.append("<br> ovo je dodano preko skripte");
    kvadrat.after("<div class='dodatak'>također dodano preko skripte</div>");
    $(".dodatak").after("<div class='col-xs-2 kvadrat'>ja sam dodan ispred žutog</div>").css("background", "var(--zelena)");

});
// kod se aktivira samo na prva.html strnici
route.add('prva.html', function() {
    console.log("Sad sam na prvoj");
    kvadrat.css("background", "red");

    function provjeriPostojiLiElement(e) {
        if (e.length) {
            console.log("element postoji");
        } else {
            console.log("element ne postoji");
        }
    }
    provjeriPostojiLiElement($("p"));

    function provjeriPara() {
        console.log($("p").length);
    }
    provjeriPara();
    kolikoJeElemenataNaStranici();
    priljepi();
    sakrijPriljepak();
});
// kod koji se aktivira samo na druga.html
route.add('druga.html', function() {
    console.log("Sad sam na drugoj");
    kvadrat.css({
        background: "#00f",
        borderRadius: 20,
        color: "#fff"
    });
    dodajPrije(); // dodaje crticu ispred naslova
    mjenjajSveH1uH6(); // mjenja sa h1 na h6 bez mjenjanja sadržaja naslova
    oznaci(); // bg:yellow na p


    $(".toggle").click(function() {
        kvadrat.slideToggle(400)
    });
    $(".paraToggle").click(function() {
        $("p").slideToggle(400);
    });
    $(".animiraj").click(function() {
        // provjeri širinu kvadrata i animiraj
        if (kvadrat.css("width") == "500px") {
            kvadrat.animate({
                width: 200
            }, 300);
        } else {
            kvadrat.animate({
                width: 500
            }, 300);
        }
    });
    kolikoJeElemenataNaStranici();

    console.log($("h3").length > 0 ? "element postoji" : "element ne postoji");
});
// dio koda koji se odnosi na treca.html
route.add("treca.html", function() {
    console.log("Evo nas na trećoj!");
    kvadrat.css({
        background: "var(--zelena)",
        color: "yellow",
        "font-weight": "bold"
    });

    function nestani() {
        kvadrat.hide();
    }
    setTimeout(nestani, 2000);

    function poruka() {
        kvadrat.after("<div class='dodatak'>dodan preko jQuerya</div>")
    }
    setTimeout(poruka, 3000);

    kolikoJeElemenataNaStranici();

    console.log($("p").exists() ? "element postoji" : "element ne postoji");
});
// You can even use regex-es:
// route.add('.*.html', function() {
//     alert('This is using a regex!');
// });

// pozivanje route funkcije
route.run();
// globalna funkcija za promjenu h1 u h4, ako je više h1 naslova, onda mu im se svima dodaje sadržaj prvog naslova
function mjenjajNaslov() {
    var naslov = $("h1");
    naslov.replaceWith("<h4>" + naslov.html() + "</h4>");
}

// mjenja sve h1 u h6 i zadržaa originalni tekst za svaki naslov (ako ih je više istih na stranici)
function mjenjajSveH1uH6() {
    $("h1").each(function() {
        var h1 = $(this);
        h1.replaceWith("<h6>" + h1.html() + "</h6>");
    });
}
// oznaci sve paragrafe
function oznaci() {
    $("p").each(function() {
        var p = $(this);
        p.replaceWith("<p class='oznaci'>" + p.html() + "</p>");
    });
}


function dodajPrije() {
    $("h1").map(function() {
        return this.firstChild;
    }).before(" - ");
}


function provjeri() {
    var duljina = $(".kvadrat").length;
    console.log(duljina);
}

// prebroj sve elemente na stranici
function kolikoJeElemenataNaStranici() {
    console.log("Ukupno elemenata na stranici: " + $("*").length);
}

function priljepi() {
    var priljepak = $("<div>", {
        "class": "priljepak",
        "css": {
            "background": "orange",
            "padding": 20
        },
        "width": 100,
        "height": 100
    });
    // dodajemo novostvoreni div.priljepak u kvadrat
    priljepak.append("ja sam priljepak");
    kvadrat.before(priljepak);
}

// sakrij priljepak koji se stvori na stranici pozivanjem gornje funkcije
function sakrijPriljepak() {
    var btn = $("<button class='btn btn-secondary'>Sakrij priljepka</button><"),
        priljepak = $(".priljepak");
    $("h1").after(btn);
    btn.click(function() {
        if (priljepak.length > 0) {
            priljepak.slideToggle(300);
        } else {
            console.log("nema priljepka na ovoj stranici");
        }
    });
}


// dodaj oznaku za vanjski link koji sadržava http
function vanjskiLink() {
    $("a").each(function() {
        if (this.hostname != location.hostname) {
            $(this).prepend("@ ").attr("target", "_blank");
        }
    })
}
vanjskiLink();

// rastavi link
function rastaviLink() {
    var url = "http://tutorialzine.com/books/jquery-trickshots?trick=12#comments";
    var a = $("<a>", {
        href: url
    });
    console.log("Host name: " + a.prop('hostname'));
    console.log("Path: " + a.prop("pathname"));
    console.log("Query: " + a.prop("search"));
    console.log("Protocol: " + a.prop("protocol"));
    console.log("Hash: " + a.prop("hash"));
}
rastaviLink()