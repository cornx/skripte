var krug = $(".krug"),
    kvadrat = $(".kvadrat"),
    dodatak = $(".dodatak");


// mousemove --> bilježi pokretanje miša unutar odabranog elementa
kvadrat.mousemove(function mjenjajBoju() {
    kvadrat.css("background", "red");
    console.log("mousemove");
});


// mousedown je isto kao i click
krug.mousedown(function mouseDown() {
    krug.css("background", "orange");
    console.log("mousedown");
    console.log($(event.target));
});

// mouseover
krug.mouseover(function mouseOver() {
    krug.css("background", "blue");
    console.log("mouseover");
});

// bind
dodatak.bind({
    mouseenter: function ulaz() {
        dodatak.addClass("plavi");
    },
    mouseleave: function izlaz() {
        dodatak.removeClass("plavi");
    }
}).css("cursor", "pointer");

// dodatak.bind
dodatak.bind('dbclick click', function() {
    dodatak.addClass("plavi");
});

// one --> isto kao i bind, samo što se pokreće samo 1 put, kasnije se deregistrira
kvadrat.one("click dbclick", function promjeniBoju() {
  kvadrat.css({
    background: "#fff",
    border: "1px solid #f00",
    boxShadow: "2px 2p 2px #f00"
  });
});
