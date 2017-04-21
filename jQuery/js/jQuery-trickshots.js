console.log("radi");
let kvadrat = document.querySelector(".kvadrat");
$(".kvadrat").css("cursor", "pointer");

function poplavi() {

        if ($(this).attr("style") == "background: var(--zelena)") {
            $(this).attr("style", "background:var(--plava)");
        } else if ($(this).attr("style") == "background:var(--plava)") {
            $(this).attr("style", "background:var(--narancasta)");
        } else if ($(this).attr("style", "background:var(--narancasta)")) {
            $(this).attr("style", "background:var(--zelena)");
        }
}
$(".kvadrat").click(poplavi);
console.log($(location).attr("href"));

// $(".kvadrat").attr("style", "background: var(--zelena)");
