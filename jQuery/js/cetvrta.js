// pozivanje prije $(document).ready
$(".btn-link").on("click", function prijeDocumentReady() {
    $("#prvi-dio").css("background", "brown");
    console.log("btn-link");
});
// ili na jednostavniji način gornji kod
$(".btn-info").click(function lala() {
    // $("#drugi-dio").css("background", "brown");
    $("#drugi-dio").addClass("bg-inverse"); // bootstrap class bg-inverse
    console.log("btn-info");
});

$(".btn-danger").click(function() {
    $(".pravokutnik-2").css("visibility", "visible").addClass("animated bounceIn"); // animate.css
});

$(document).ready(function() {
    // postavljanje routera
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

    // povezivanje koda sa stranicom
    // kod se aktivira samo na index.html strnici
    route.add('cetvrta.html', function() {
        // ovdje ide kod vezan samo za određenu stranicu
        $("#prvi-dio").css({
            background: "red",
            color: "#fff"
        });
        $("#drugi-dio").css({
            background: "orange",
            color: "#fff",
            "font-weight": "bold",
            padding: 20,
            cursor: "pointer"
        });
        $("#drugi-dio").on("click", function() {
            $(this).css({
                "background": "blue",
                width: "100%",
                height: "800px"
            });
        });

    });

    // pozivanje routera
    route.run();

    // event listener na svaki li link
    var list = $("#test-lista");
    list.addClass("col-xs-12");

    list.on("click", "li", function klikNaLiElement() {
        // $(this).remove();
        for (let i = 0; i < list.length; i++) {
            console.log($(this)[i].textContent);
            if ($(this).attr("id") === "tocno") {
                $(this).addClass("animated bounce");
                $(this).css({
                    background: "green",
                    color: "#fff"
                });
            } else {
                $(this).addClass("animated shake");
                $(this).css({
                    background: "red",
                    color: "#fff",
                    "text-decoration": "none"
                })
            }
        }

    });

    function pricekaj() {
        // array elemenata na koje primjenjujemo event
        let arr = [$("#prvi-dio"), $("#drugi-dio"), $(".pravokutnik-2")],
            btnPrikazi = $(".btn-success");

        btnPrikazi.css("visibility", "hidden"); // skrivamo btnPrikazi jer nam ne treba

        // funkcija sa 2 argumenta (css class)
        var prikazi = function(x, y) {
            for (let i = 0; i < arr.length; i++) {
                // arr[i].css(x, y).addClass("animated bounceIn");
                arr[i].removeClass(y);
                arr[i].addClass(x);
            }
        }
        // timeout funkcija koja poziva gornju finkciju prikazi()
        setTimeout(function nestani() {
            prikazi("animated fadeOut"); // prosljeđujemo class (drugi argument je prazan jer nam ne treba)
            btnPrikazi.css("visibility", "visible").addClass("animated fadeIn"); // prikazujemo btnPrikazi jer nam treba
        }, 2000);

        // klikom na button pokazuju se
        $(".btn-success").click(function pojaviSe() {
            prikazi("animated fadeIn", "animated fadeOut"); // prvi argument je dodavanje classa, a drugi micanje
            btnPrikazi.removeClass("fadeIn").addClass("fadeOut"); // sakrivamo btnPrikazi jer ne treba
        })
    };
    pricekaj();

    // pogledaj sadržaj naslova
    console.log($("h4").text()); // četvrta stranica
    console.log($("#naslov").html()); // isto četvrta stranica
    console.log($("#drugi-dio").html());

    // pomicanje elemenata
    function pomakniElement() {
        let elt = $("#pokretni-pravokutnik"); // element kojeg pokrećemo
        let pos = elt.offset(); // trenutna pozicija elementa
        for (let i = 0; i < 50; i++) {
            pos.top += 1; // pomiće za 50px u odnosu na top
            pos.left += 1; // pomiće za 50px u odnosu na left
            elt.offset(pos);
        }
        console.log(elt.innerWidth(), elt.outerWidth());
        console.log(elt.innerHeight(), elt.outerHeight());

        let paddingWidth = elt.innerWidth(),
            borderWidth = elt.outerWidth(),
            contentWidth = elt.width(),
            marginWidth = elt.outerWidth(true);
        let padding = (paddingWidth - contentWidth) / 2,
            border = (borderWidth - paddingWidth) / 2,
            margin = (marginWidth - borderWidth) / 2;
        console.log("Padding: ", padding, "px");
        console.log("Margin: ", margin, "px");
        console.log("Border: ", border, "px");
        elt.width(200);
        console.log(elt.width() + "px");
    }


    $(".btn-primary").click(function() {
        pomakniElement(); // pokreni funkciju klikom na btn
    });
    // sprječava scroll stranice prema vrhu kad se klikne href="#"
    $('a').click(function(e) {
        e.preventDefault();
    });

    //********************************************************//
    //                   DOM manipulacija                     //
    //********************************************************//


    // krug napravljen s jQueryem
    $(".krug").width(100).height(100).css({
        "border-radius": "50%",
        "box-shadow": "2px 2px 2px grey"
    });

    // generična funckija za animaciju elementa
    function animirajElement(elem, cls) { // element i class koji se dodaje i miće nakon animacije
        $(elem).click(function() { // klikom na želejni HTML element
            $(elem).addClass("animated " + cls); // dodajemo tom istom elementu željeni class
            setTimeout(function reset() { // nakon 1 sekunde
                $(elem).removeClass(cls); // mićemo dodani class sa elementa (resetiramo elemnt)
            }, 1000);
        });
    }

    // stvaranje kvadrata i dodavanje iza kruga
    var kvadrat = $(document.createElement("div")).css({
        height: 100,
        width: 100,
        background: "red",
        boxShadow: "3px 3px 3px grey",
        margin: 20,
        borderRadius: 5
    });
    // dodavanje kvadrata iza kruga
    $(".krug").after(kvadrat);

    // animacija na kvadratu
    animirajElement(kvadrat, "tada");
    animirajElement(".krug", "swing");
    animirajElement("#pokretni-pravokutnik", "shake");


    function listaAnimacija(elem, cls) {
        let e = document.querySelectorAll(elem);
        for (let i = 0; i < e.length; i++) {
            $(e[i]).mouseenter(function() {

                $(e[i]).addClass("animated " + cls);
                setTimeout(function restirajAnimaciju() {
                    $(e[i]).removeClass(cls);
                }, 1000);
            });
        }
    }
    listaAnimacija("#test-lista > li", "tada");


    $(document.createElement("div")).addClass("novi").prependTo("body").css({
        height: 200,
        width: 200,
        backgroundColor: "yellow",
        margin: 10,
        display: "block",
        padding: 10
    });
    // provjeri ako je novonastali element prazan
    var prazan = $(".novi").is(":empty");
    console.log(prazan);

    $(".novi").click(function dodajTekst() {
        // dodaj neki tekst u element
        $(this).text("sad imaš tekst u sebi, više nisi prazan").addClass("napravi-border-radius");
        console.log($(this).is(":empty"));
    });

    // map
    function paragrafAnimacija(elem, cls) {
      $(elem).css("cursor", "pointer");

        let e = document.querySelectorAll(elem);
        for (let i = 0; i < e.length; i++) {
            $(e[i]).mouseenter(function animiraj() {
                $(e[i]).addClass("animated " + cls); // animiraj
                $(e[i].firstChild).before(function provjera() {

                    if (e[i].firstChild != "*") {
                        return "*";
                    } else if (e[i].firstChild == "*") {
                        $(e[i].firstChild).replaceWith("*");
                    }else {
                      $(e[i].firstChild).replaceWith("*");

                    }
                }); // dodaj oznaku da si već ovdje bio ispred prvog slova
                setTimeout(function reset() { // makni animaciju
                    $(e[i]).removeClass(cls);
                }, 1000);
            });
        }
    }
    paragrafAnimacija(".ogromni > p", "shake");

    $(".ogromni > p").map(function dodajPlus() {
        return this.firstChild;
    }).before("+   ");
}); // end $(document).ready
