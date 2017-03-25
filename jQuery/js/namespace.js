let kvadrat = $(".kvadrat"),
    btn = $("#klikni-na-mene"),
    prikaz = $(".prikaz"),
    btnNs = $("#ns-trigger");



funkcija = {
    name: "namespace funkcije za vježbu",
    opis: "pozivanje: funkcija.nazivFunkcije(argument)",
    pocrveni: function(e) {
        $(e).css("background", "red");
    },
    pozeleni: function(e) {
        $(e).css("background", "green");
    },
    pozuti: function(e) {
        $(e).css("background", "yellow");
    },
    poplavi: function(e) {
        $(e).css("background", "blue");
    },
    rounded: function(e) {
        $(e).addClass("rounded");
    },
    sjena: function(e) {
        $(e).css("box-shadow", "4px 4px 4px #999");
    },
    a1: function(prvi) {
        $(prvi).addClass("animated bounce");
    },
    protresi: function(e) {
        $(e).addClass("animated shake");
    }
}
$("#aktiviraj-sve").on("click.pocrveni", function() {
    funkcija.pocrveni("#p1");
}).on("click.pozeleni", function() {
    funkcija.pozeleni("#p2");
}).on("click.pozuti", function() {
    funkcija.pozuti("#p3");
}).on("click.poplavi", function() {
    funkcija.poplavi("#p4");
}).on("click", function() {
    funkcija.rounded("#p1, #p2, #p3, #p4");
}).on("click", function() {
    funkcija.sjena("#p1");
});
let tada = "animated tada";

$("#multiple").on("click.prvi", function animirajPrvog() {
    $("#p1").addClass(tada);

}).on("click.drugi", function animirajDrugog() {
    funkcija.a1("#p2");
    setTimeout(function() {
        $("#p1").removeClass(tada);
    }, 1000);
}).on("click", function() {
    funkcija.protresi("#p3");
});


// namespace
funkcijeNS = {
    name: "moje namespace funkcije",
    opis: "ovo je fora i trebo bi malo više ovo proučavat",
    funkcija1: function() {
        btn.click(function() {
            console.log("ja sam prva funkcija iz namespacea");
            kvadrat.addClass("animated bounce");
        })
    },
    funkcija2: function() {
        btn.click(function() {
            console.log("ja sam druga funkcija iz namespacea");
            kvadrat.css("background", "red");
        })
    },
    funkcija3: function() {
        btn.click(function() {
            console.log("ja sam treća funkcija iz namespacea");
            kvadrat.css("border", "10px solid #00f");
        })
    },
    funkcija4: function() {
        btn.click(function() {
            console.log("pokrenuta funkcija 4");
            kvadrat.removeClass("bob");
        })
    },
    dodajElement: function() {
        let krug = $(document.createElement("div")).css({
            height: 100,
            width: 100,
            backgroundColor: "green",
            display: "block",
            position: "relative",
            float: "left",
            margin: 10,
            borderRadius: "50%"
        });
        kvadrat.after(krug);
    },
    pocrveni: function() {
        pravokutnik.css("color", "red");
    },
    poskoci: function() {
        pravokutnik.addClass("animated bounce");
    }

}
funkcijeNS.funkcija4();
funkcijeNS.funkcija1();
// funkcijeNS.funkcija2();
// funkcijeNS.funkcija3();
console.log(funkcijeNS.name);
console.log(funkcijeNS.opis);
// $("*").unbind("mouseover mouseenter");



prikaz.on("glupost", function(event) {
    console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

});
btnNs.click(function(event) {
    prikaz.trigger("glupost");

    funkcijeNS.dodajElement();
});

function skok(elem) {
    $(elem).addClass("animated bounce");
}

function zacrveniElement(elem) {
    $(elem).css("background", "red");
}

let dvaput = $("#dvaput"),
    pravokutnik = $(".p1"),
    upute = $(".upute");

dvaput.on("click.skok", function() {
    skok(pravokutnik);
    upute.css("visibility", "visible");
}).on("click.zacrveniElement", function() {
    zacrveniElement(pravokutnik);
}).on("click", function() {
    pravokutnik.addClass("rounded")
}).on("click.makniAnimaciju", function() {
    setTimeout(function() {
        pravokutnik.removeClass("bounce animated");
    }, 1000);
});

dvaput.on("click", function dodajUpozorenje() {
    setTimeout(function() {
        upute.html("aniamcija deaktivirana");
    }, 2000);
}).off("click.makniAnimaciju");

// namespace funkcije za stvaranje DOM elemenata
domElementi = {
    opis: "funkcije za dodavanje dom elemenata",

    krug: function dodajKrug(elem) { // elem je DOM element kojem pruljepljuemo krug
        let krug = $(document.createElement("div")).css({
            height: 150,
            width: 150,
            borderRadius: "50%",
            backgroundColor: "orange",
            position: "relative",
            float: "left",
            margin: 20,
            class: "krug-2"
        }).addClass(".krug-2");
        $(elem).after(krug); // dodaj krug nakon DOM elementa
    },
    kvadrat: function dodajKvadrat(elem) {
        let kvadrat = $(document.createElement("div")).css({
            height: 150,
            width: 150,
            borderRadius: "5%",
            backgroundColor: "green",
            position: "relative",
            float: "left",
            margin: 20
        }).addClass("kvadrat-2");
        $(elem).after(kvadrat);
    },
    pravokutnik: function dodajPravokutnik(elem) {
        let pravokutnik = $(document.createElement("div")).css({
            width: 300,
            height: 150,
            borderRadius: "5%",
            backgroundColor: "grey",
            position: "relative",
            float: "left",
            margin: 20
        }).addClass("pravokutnik-2");
        $(elem).after(pravokutnik);
    }
}
$("#zaljepi").on("click", function() {
    domElementi.kvadrat(".kvadrati");
}).on("click", function() {
    domElementi.krug("#p1");
});




//********************************************************//
//                  array animacije                       //
//********************************************************//
// sintaksa:  $("#btn").on("click", function(){}[x,y,z...]});

// var izbornik = $("#izbornik-animacija").val();

function animiraj(elem, anim) {
    $(elem).addClass("animated " + anim);
}

function odanimiraj(elem, anim) {
    $(elem).removeClass("animated " + anim);
}

$("#array-triggera").on("click", function() {
    [animiraj("#p1", "swing"), animiraj("#p2", "shake"), animiraj("#p3", "bounce"), animiraj("#p4", "tada")]
}).on("click", function resetiraj() {
    setTimeout(function() {
        [odanimiraj("#p1", "swing"), odanimiraj("#p2", "shake"), odanimiraj("#p3", "bounce"), odanimiraj("#p4", "tada")]
    }, 1000); // resetira animaciju
});


function selectAnimaciju(e) {
  let anim = $("#izbornik-animacija").val();
    $(e).addClass("animated " + anim);
}

function removeAnimaciju(e) {
  let anim = $("#izbornik-animacija").val();
    $(e).removeClass("animated " + anim);
}

$("#select").on("click", function() {
    [selectAnimaciju("#p1"), selectAnimaciju("#p2"), selectAnimaciju("#p3"), selectAnimaciju("#p4")]
}).on("click", function resetiraj() {
    setTimeout(function() {
        [removeAnimaciju("#p1"), removeAnimaciju("#p2"), removeAnimaciju("#p3"), removeAnimaciju("#p4")]
    }, 1000); // resetira animaciju
});
