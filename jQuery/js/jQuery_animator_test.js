// $(".btn").click(function animirajElement() {
// $(".krug").addAnimation('animated lightSpeedIn', 2000);
// console.log("ovo ga je trebalo pokrenuti");
// });


// $(".btn").click(function pocrni() {
//   $(".krug").addClass("animated bounce");
//   console.log("kliknuto");
// });

$(document).ready(function() {


    let k0 = $("#krug-prvi"),
        kv0 = $("#kvadrat-nulti"),
        kv1 = $("#kvadrat-prvi"),
        kv2 = $("#kvadrat-drugi");

    if (k0.isOnScreen()) {  // animirat će se samo ako je vidljiv u trenutku kad se stranica učita
        k0.addAnimation("tada");
        console.log("krug se pojavio");
    }
    if (kv0.isOnScreen()) {
        kv0.addAnimation("bounce");
        console.log("kvadrat se pojavio");
    }


    function animiraj(btn, elem, anim) { // animacija (btn = button za početak animacije, elem = DOM elemnt koji se animira, anim = izvor animacije (padajući izbornik))
        let staraAnimacija,
            e = $(elem); // lokalne varijable za staru animaciju (prazna varijabla) i DOM element
        $(btn).click(function() { // kad se klikne na željeni button
            let novaAnimacija = $(anim).val(); // prosljedi odabranu virjednost iz padajućeg izbornika u novu varijablu (novaAnimacija)
            console.log(novaAnimacija); // ispiši odabranu animaciju u konzoli
            if (e.hasClass(staraAnimacija)) { // ako animacija ima neki već odabrani class (animaciju),,,
                e.removeAnimation(staraAnimacija); // ...makni taj class (animaciju)
            }
            e.addAnimation(novaAnimacija, 3500); // dodaj odabranu animaciju i animiraj je 500 ms
            e.removeAnimation(novaAnimacija); // kad završi animacija, makni je s DOM elementa
            staraAnimacija = novaAnimacija; // ažuriraj vrijednost varijable staraAnimacija sa novom --> novododana animacija na kraju postaje stara
        });
    }
    animiraj("#btn-krug", ".krug", "#izbornik-animacija");  // pozivanje animacije na krugu
    animiraj("#btn-kvadrat", ".kvadrat", "#izbornik-animacija-2"); // pozivanje animacije na kvadratu iz 2. izbornika animacija
});
