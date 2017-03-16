$(document).ready(function() {

    let krug = $(document.createElement("div")).addClass("krug").css({
            height: 100,
            width: 100,
            backgroundColor: "grey",
            margin: 10,
            color: "#fff",
            paddingTop: 35,
            textAlign: "center",
            borderRadius: "50%",
            display: "block",
            position: "relative",
            float: "left",
            cursor: "pointer"
        }),
        kvadrat = $(".kvadrat");
    // kvadrat.prepend(krug);
    // krug.prependTo(kvadrat);
    kvadrat.after(krug);
    // kvadrat.before(krug);
    // kvadrat.replaceWith(krug);
    // krug.replaceWith(kvadrat);

    // provjeri ako je krug ispred kvadrata
    krug.click(function premjesti() {
        if (krug.index() < kvadrat.index()) { // ako je ispred kvadrata
            kvadrat.after(krug); // premjesti ga iza kvadrata
            krug.text("after"); // dodaj tekst u krug
        } else { // ako nije
            kvadrat.before(krug); // premjesti ga ispred kvadrata
            krug.text("before"); // dodaj tekst u krug
        }
    });

    // parking - clone()
    let parking = $(document.createElement("div")).addClass("col-xs-4 parking").css({
        height: 200,
        // width:200,
        position: "relative",
        float: "left",
        display: "block",
        margin: 20,
        padding: 10,
        borderRadius: "4%",
        boxShadow: "2px 2px 2px #ccc",
        border: "1px solid #ccc"
    });
    kvadrat.after(parking);
    $("a").clone().appendTo(parking);
    krug.clone(true).appendTo(parking); // true je za kloniranje i event handlera (inače ih ne kopira)
    krug.clone().appendTo(parking).css("background", "red"); // mjenja krug ali ne prenosi event handler

    // wrap odgovarajuće ime

    var ime = 'ivana';

    var rgx = new RegExp('\\b(' + ime + ')\\b', 'ig');

    $('#imena > p').contents().filter(function() {
        return this.nodeType === 3;
    }).each(function() {
        $(this).replaceWith($(this).text().replace(rgx, '<span class="zuti">$1</span>'));
    });

    // vježbanje events-a
    $(".event-dio").css({
        marginTop: 30,
        marginBottom: 30,
        height: 300,
        padding: 20,
        backgroundColor: "orange",
        cursor: "pointer"
    }).addClass("col-xs-12");

    let k1 = $(document.createElement("div")).addClass("k1").css({
        height: 100,
        width: 100,
        backgroundColor: "grey",
        position: "relative",
        float: "left",
        display: "block"
    }).appendTo(".event-dio");
    let k2 = $(document.createElement("div")).addClass("k2").css({
        height: 100,
        width: 100,
        backgroundColor: "blue",
        display: "block",
        position: "relative",
        float: "left",
        marginLeft: 10
    });
    k1.after(k2); // dodajemo k2 kraj k1 (marginLeft:10)
    // povezujemo 2 funkcije na hover event (1. mouseenter, 2. mouselave)
    k1.hover(function mouseEnter() {
        k1.addClass("napravi-border-radius").removeClass("makni-border-radijus");
    }, function mouseLeave() {
        k1.addClass("makni-border-radijus").removeClass("napravi-border-radius")
    });

    // k2.toggle(function clickPrvi() {
    //     k2.addClass("napravi-border-radius").removeClass("makni-border-radijus");
    // }, function clickDrugi() {
    //     k2.addClass("makni-border-radijus").removeClass("napravi-border-radius")
    // });
});
