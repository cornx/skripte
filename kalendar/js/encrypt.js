// baffle.js encrypt
var kal = document.querySelector(".container");

let b = baffle(kal, {
        characters: '~#^*|/█▓▒░█▓▒░█▓▒░',
        speed: 750
    },

);
keyboardJS.bind('e', function(e) {
    b.once();
});
keyboardJS.bind('d', function(e) {
    b.reveal();
});