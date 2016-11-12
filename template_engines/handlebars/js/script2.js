// skripta za mustache-functions.html
$("document").ready(function() {
    // custom helper
    Handlebars.registerHelper("kolicinaUpozorenje", function(podatciProizvoda) {
        if (podatciProizvoda.zalihe == false && podatciProizvoda.kolicina > 1) {
            return "";
        } else if (podatciProizvoda.kolicina > 2) {
            return "Ima dosta proizvoda na zalihama";
        } else if (podatciProizvoda.zalihe == true) {
            return "Još malo pa nestalo!";
        }
    });

    var template = $("#kartica").html();

    // handlebars compiles the template into callable function
    var renderer = Handlebars.compile(template);
    var skateboard_shop = renderer({
        "daske": [{
            "proizvod": "Zero",
            "skater": "Jamie Thomas",
            "stanje": "nova",
            "opis": "Najnoviji skate Jamie Thomasa, serija 2016.",
            "slika": "img/zero.jpg",
            "podatci": {
                "cijena": 700.00,
                "zalihe": true,
                "kolicina": 2
            }
        }, {
            "proizvod": "Poewll",
            "skater": "Josip Sabalić",
            "stanje": "polovna",
            "opis": "Old school skejt. Potpis Josipa Sabalića - Menega na njoj. Nema krekova. Ovaj sk8 je vozio Caballero '80ih",
            "slika": "img/powell.jpg",
            "podatci": {
                "cijena": 250.00,
                "zalihe": true,
                "kolicina": 5
            }
        }, {
            "proizvod": "Baker",
            "skater": "Andrew Reynolds",
            "stanje": "nova",
            "opis": "Klasična daska iz 1990-ih. Vozio Andrew Reynolds u svojim najboljim danima. Nema krekova.",
            "slika": "img/baker.jpg",
            "podatci": {
                "cijena": 500.00,
                "zalihe": false,
                "kolicina": 12
            }
        }, {
            "proizvod": "Birdhouse",
            "skater": "Tony Hawk",
            "stanje": "polovna",
            "opis": "Tony Hawkova daska iz doba kad je bez problema radio 900 spin. Ima jedan mali krek.",
            "slika": "img/birdhouse.jpg",
            "podatci": {
                "cijena": 100.00,
                "zalihe": false,
                "kolicina": 1
            }
        }, {
            "proizvod": "Cliche",
            "skater": "",
            "stanje": "polovna",
            "opis": "Daska europskog proizvođača, skoro neslomljiva. Stara 10 godina i ima samo 1 krek",
            "slika": "img/cliche.jpg",
            "podatci": {
                "cijena": 100.00,
                "zalihe": true,
                "kolicina": 2
            }
        }, {
            "proizvod": "Toy Machine",
            "skater": "Mike Maldonado",
            "stanje": "polovna",
            "opis": "Legendarna daska 'Fists' iz doba kad su Mike Maldonado i Ed Templeton vozili na njoj. Polovna, samo 4 kreka",
            "slika": "img/toy_machine.jpg",
            "podatci": {
                "cijena": 100.00,
                "zalihe": true,
                "kolicina": 5
            }
        }]
    });

    $("#predlozak").html(skateboard_shop);
});