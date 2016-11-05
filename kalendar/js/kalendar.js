// funkcija za označavanje dana 
function tablica() {
    var dan = window.event.target;

    if (event.shiftKey) {
        dan.className = "prviDan";
    } else if (event.ctrlKey) {
        dan.className = "zadnjiDan";
    } else if (event.altKey) {
        dan.className = "";
    } else {
        dan.className = "zacrveni";
    }
}
// funkcija za stvaranje slike 
function uslikaj() {
    document.querySelector(".upute").className = "nevidljiv"; // micanje uputa
    document.querySelector("#uputeBtn").className = "nevidljiv"; // micanje uputa
    var slikaKalendara = document.querySelector(".slika-kalendara"); // micanje uputa
    html2canvas(document.querySelector(".container")).then(function(canvas) {
        // document.body.appendChild(canvas);
        slikaKalendara.append(canvas);
        document.querySelector("canvas").className = "uslikano";
    });
    document.querySelector(".poruka").className = "poruka"; // pokazuje poruku sa uputama
};
// pozivanje gornjih funkcija onclick metorom
document.querySelector("#tablica-mjesec").onclick = tablica;
document.querySelector("#uslikaj-kalendar").onclick = uslikaj;
