// Animate elements with effect and call callback when finish.
// $('#selector').jAnimate(effect, callback);

// Animate elements with effect and remove classes when finish, also call callback.
// $('#selector').jAnimateOnce(effect, callback);

// Execute a sequence of animations passed in arrayOfEffects and call callback when finish all.
// $('#selector').jAnimateSequence(arrayOfEffects, callback);
function kombo() {

    for (let i = 0; i < 3; i++) {
        $(".pravokutnik").jAnimateSequence(['bounce', 'tada', 'wobble'], function gotovo() {
            $(this).css("background", "red");
        });
    }
}
kombo();


var velicinaSlova = $(".velika-slova").css("font-size");

console.log(velicinaSlova);


$(".btn-danger").click(function ispisiIme() {
  let ime = $("#ime").val();

    $(".ispisi").text(ime);
    console.log(ime);
});
