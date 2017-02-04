//**********************************************************

// pogodi broj od 1 do 10
// za svaku igru se nasumično generira novi broj od 1 do 10
// natjecatelj ima 3 pokušaja i nakon toga mu se prikaže poduka ako nije uspio
// kraj upisanog broja se ispisuje podruka o netočnosti i broju preostalih pokušaja

//**********************************************************

// deklariranje DOM varijabli
var brojUpis = document.querySelector("#upisi-broj"), // input
    provjeri = document.querySelector("#provjeri"), // btn submit
    // broj = document.querySelector("#broj"), // broj koji se ispisuje
    //pogodak = document.querySelector(".pogodak"), // poruka ako je pogođeno ili promašeno + provjera
    rezultat = document.querySelector(".rezultat"), // prikaz poruke (hidden)
    reset = document.querySelector(".close"), // reset btn
    brojPokusaja = document.querySelector("#broj-pokusaja"), // preostali broj pokušaja
    nasumicno = Math.floor(Math.random() * (10 - 0)) + 0, // random broj između 0 i 10
    i = 1; // broj pokušaja na početku

// prikaz odabranog nasumičnog broja
(function() {
    console.log("Nasumično odabran br " + nasumicno);
})();


// hvataj input i provjeravaj je li veći ili manji od 10
provjeri.addEventListener("click", function() {

    // broj pokušaja se resetira nakon izlaska iz loopa (jer tad je brojPokusaja = 0)
    brojPokusaja.innerHTML = 0;

    if (i < 3) {
        brojPokusaja.innerHTML = 3 - i;
        i++;
        console.log("i: " + i);



        var broj = brojUpis.value;
        var nasumicniBroj = nasumicno;

        rezultat.style.visibility = "visible";

        // provjeravanje upisanog broja
        if (broj === nasumicniBroj) {
            rezultat.innerHTML = "<span class='tocno'>Točno, pogodio si. Traženi broj je " + nasumicno + "</span>";
            brojUpis.disabled = true;
            provjeri.disabled = true;
            return broj;
        }
        if (broj < 0) {
            rezultat.innerHTML = "Broj <span id='broj'>" + broj + "</span> je manji od 0.<br><span class='upozorenje'>Upiši broj između 0 i 10</span>";
        }
        if (broj > 10) {
            rezultat.innerHTML = "Broj <span id='broj'>" + broj + "</span> je veći od 10. <br><span class='upozorenje'>Upiši broj između 0 i 10</span>";
        }
        if (broj === "" || broj === null || broj.length === 0) {
            rezultat.innerHTML = "Nisi niš upiso. Izgubio si 1 pokušaj. Samo se ti pravi pametan";
        }
        if (broj != nasumicniBroj && broj.length !== 0) {
            rezultat.innerHTML = "Broj <span id='broj'>" + broj + "</span> nije traženi broj. Pokušaj ponovno.";
        }

    } else {
        rezultat.innerHTML = "<span class='upozorenje'>Nemaš više pokušaja</span><br><span class=''>Traženi broj koji nisi pogodio je <span id='broj'>" + nasumicno + "</span></span>";

        brojUpis.disabled = true;
        provjeri.disabled = true;

    }
    console.log(broj);
});

// resetiranje aplikacije
reset.addEventListener("click", function() {
    // i = 1; // postavljamo i na staro (3 pokušaja)
    // brojUpis.disabled = false; // omogućujemo input polje
    // brojPokusaja.innerHTML = 3; // upisuje se broj pokušaja u uputama
    // // rezultat.style.visibility = "hidden"; // postavlja se pogodak na hidden
    // rezultat.textContent = ""; // praznimo rezultat
    // console.log(i);
    // nasumicno = Math.floor(Math.random() * (10 - 0)) + 0; // resetiranje nasumičnog broja
    // console.log("nasumični: " + nasumicno);
    location.reload(); // refresha stranicu
});