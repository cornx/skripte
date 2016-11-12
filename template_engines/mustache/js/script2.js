// skripta za mustache-functions.html
$("document").ready(function() {

    var predlozak = $("#kalkulator").html();
    var podatci = {
        "brojevi": [{
            "prvi": 10,
            "drugi": 20
        }, {
            "prvi": 1,
            "drugi": 2
        }, {
            "prvi": 23,
            "drugi": 24
        }, {
            "prvi": 12,
            "drugi": 90
        }, {
            "prvi": 112,
            "drugi": 210
        }]
    };
    podatci.zbroj = function() {
        return this.prvi + this.drugi;
    };

    var ispis = Mustache.render(predlozak, podatci);
    $("#rezultat").html(ispis);
});