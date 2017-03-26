function startIntro(){
        var intro = introJs();
          intro.setOptions({
            steps: [
              {
                intro: "Hello world!"
              },
              {
                element: document.querySelector('#korak-1'),
                intro: "This is a tooltip.",
                position:"auto"
              },
              {
                element: document.querySelectorAll('#korak-2')[0],
                intro: "Ok, wasn't that fun?",
                position: 'auto'
              },
              {
                element: '#korak-3',
                intro: 'More features, more fun.',
                position: 'auto'
              },
              {
                element: '#korak-4',
                intro: "Another step.",
                position: 'auto'
              },
              {
                element: '#korak-5',
                intro: 'Get it, use it.',
                position:"auto"
              }
            ]
          });
          intro.start();
      }
$(".fa-info-circle").click(function pokreniUpute() {
  startIntro();
})
