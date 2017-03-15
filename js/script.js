$(document).ready(function() {
// routes za pokretanje dijelova koda u odgovarajućem html-u
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


// dodavanje kod na pojedinu html stranicu
route.add("../ripple-effect.html", function samoNaRippleEffectStranici() {
$(document).ready(function() {

    // ------- Propeller Ripple Effect component js function ------- //
    $(".ripple-effect").on('mousedown touchstart', function(e) {
        var rippler = $(this);
        $('.ink').remove();
        // create .ink element if it doesn't exist
        if (rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }
        var ink = rippler.find(".ink");
        // prevent quick double clicks
        ink.removeClass("animate");
        // set .ink diametr
        if (!ink.height() && !ink.width()) {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }
        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width() / 2;
        var y = e.pageY - rippler.offset().top - ink.height() / 2;
        // set .ink position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");

        setTimeout(function() {
            ink.remove();
        }, 1500);
    });
  });
});


route.add("../index.html", function samoNaIndexStranici() {
  console.log("radi samo na indexu");

  // // pozivanje Tabulator.js tablice
  // $("#moja-tablica").tabulator({
  //     fitColumns: true,
  //     columns: [{
  //         title: "Moj primjer",
  //         field: "primjer",
  //         sortable: true,
  //         width: 180
  //     }, {
  //         title: "Link na projekt (GitHub)",
  //         field: "link_projekt",
  //         sortable: false,
  //         width: 180
  //     }, {
  //         title: "Bilješke",
  //         field: "ostalo",
  //         sortable: false,
  //     }, ]
  // });
  //
  //
  // $("#moja-tablica").tabulator("setData", "../data/data.json");
});



// pozivanje route funkcije
route.run();



// dodaje na sve .btn class ripple-effect
function rippleEffect() {
    let btn = document.querySelectorAll(".btn");
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList += " ripple-effect";
    }
}
rippleEffect();


// pozivanje Tabulator.js tablice
$("#moja-tablica").tabulator({
    fitColumns: true,
    columns: [{
        title: "Moj primjer",
        field: "primjer",
        sortable: true,
        width: 180
    }, {
        title: "Link na projekt (GitHub)",
        field: "link_projekt",
        sortable: false,
        width: 180
    }, {
        title: "Bilješke",
        field: "ostalo",
        sortable: false,
    }, ]
});


$("#moja-tablica").tabulator("setData", "data/data.json");

});
