//setTimeout(function(){  
  // introJs().showHints();
  // introJs().showHintDialog(0);

  //  introJs().start();
  // introJs().addHints();
//}, 1000);

function startIntro(){
        var intro = introJs();
          intro.setOptions({
            steps: [
              { 
                intro: "Hello world!"
              },
              {
                element: document.querySelector('.cont'),
                intro: "This is a tooltip."
              },
              // {
              //   element: document.querySelectorAll('#step2')[0],
              //   intro: "Ok, wasn't that fun?",
              //   position: 'right'
              // },
              {
                element: '.cont2',
                intro: 'More features, more fun.',
                position: 'left'
              },
              // {
              //   element: '#step4',
              //   intro: "Another step.",
              //   position: 'bottom'
              // }
            ]
          });
          intro.start();
      }

startIntro();