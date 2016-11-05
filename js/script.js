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


