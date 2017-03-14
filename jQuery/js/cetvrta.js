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
}); // end $(document).ready
