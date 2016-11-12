$("document").ready(function() {

    // handlebars compiles the template into callable function
    var renderer = Handlebars.templates["index"]

    // call the compiled function with the template data
    var result = renderer({
        "fotografije": [{
            "slika": "../../img/001.jpg",
            "naslov": "Gitare",
            "kategorija": "city life",
            "opis": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil soluta exercitationem repellat eius officiis quis",
            "autor": "Atiba Jefferson",
            "godina": "1960.",
            "zalihe": true
        }, {
            "slika": "../../img/002.jpg",
            "naslov": "Ljubičasta apstrakcija",
            "kategorija": "abstract",
            "opis": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil soluta exercitationem repellat eius officiis quis",
            "autor": "",
            "godina": "",
            "zalihe": false
        }, {
            "slika": "../../img/003.jpg",
            "naslov": "Zalazak sunca",
            "kategorija": "nature",
            "opis": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil soluta exercitationem repellat eius officiis quis",
            "autor": "Matković",
            "godina": "1995.",
            "zalihe": true
        }, {
            "slika": "../../img/004.jpg",
            "naslov": "Ulični nogomet",
            "kategorija": "sports",
            "opis": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil soluta exercitationem repellat eius officiis quis",
            "autor": "",
            "godina": "2007.",
            "zalihe": false
        }, {
            "slika": "../../img/005.jpg",
            "naslov": "Elektronika",
            "kategorija": "elektronika",
            "opis": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil soluta exercitationem repellat eius officiis quis",
            "autor": "Vinko Maržić",
            "godina": "2015.",
            "zalihe": true
        }, {
            "slika": "../../img/006.jpg",
            "naslov": "San Francisco",
            "kategorija": "city life",
            "opis": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil soluta exercitationem repellat eius officiis quis",
            "autor": "Mr. Monk",
            "godina": "2002.",
            "zalihe": true
        }]

    });

    $("#predlozak").html(result);
});