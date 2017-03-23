var kvadrat = $(".kvadrat"),
    btn = $(".btn-primary"),
    btn2 = $(".btn-secondary");
// btn.hover(function hoverOn() {
//     btn.addClass("hvr-bob");
//
//     function hoverOff() {
//         btn.removeClass("hvr-bob");
//     }
// });
kvadrat.bind({
    mouseenter: function ulaz() {
        $(this).addClass("bob");
    },
    mouseleave: function izlaz() {
        $(this).removeClass("bob");
    }
});
//
// btn.bind({
//     mouseenter: function prva() {
//         kvadrat.addClass("bob");
//     },
//     mouseleave: function druga() {
//         kvadrat.removeClass("bob")
//     }
// });

// namespace
funkcijeNS = {
    name: "moje namespace funkcije",
    opis: "ovo je fora i trebo bi malo više ovo proučavat",
    funkcija1: function() {
        btn.click(function() {
            console.log("ja sam prva funkcija iz namespacea");
            kvadrat.addClass("bob");
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
    }

}
funkcijeNS.funkcija4();
funkcijeNS.funkcija1();
// funkcijeNS.funkcija2();
// funkcijeNS.funkcija3();
console.log(funkcijeNS.name);
console.log(funkcijeNS.opis);
// $("*").unbind("mouseover mouseenter");


// funkcijeNS.dodajElement();
btn2.click(function functionName() {
    funkcijeNS.dodajElement();
});
