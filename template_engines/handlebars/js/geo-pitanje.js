$("document").ready(function() {
    var template = $("#geografija").html();
    var renderer = Handlebars.compile(template);

    var result = renderer({
        "pitanja": [{
            "id": 1,
            "pitanje": "Glavni grad Hrvatske je:",
            "odgovor": ["Rijeka", "Zagreb", "Osijek", "Split"],
            "tocanOdgovor": 2
        }, {
            "id": 2,
            "pitanje": "Pod UNESCO-vom zaštitom je:",
            "odgovor": ["Dubrovnik", "Zadar", "Pag", "Novalja"],
            "tocanOdgovor": 1
        }, {
            "id": 3,
            "pitanje": "Po zadnjem popisu, u Hrvatskoj je oko:",
            odgovor: ["4,8 mil. st", "4,5 mil. st", "4,2 mil. st", "4,1 mil. st"],
            "tocanOdgovor": 3
        }]
    }); // end renderer

    $("#predlozak").html(result);
}); // end jQuery