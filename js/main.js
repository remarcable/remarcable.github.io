$(document).ready(function () {
  outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: ''
    });
  $('.video').vide('img/whiteboard/White-Board', {
    posterType: 'jpg',
    resizing: true,
    bgColor: '#333333'
  });
  $(".typed").typed({
            strings: ["Coff^200ee.", "Mu^400sic.", "Inter^200net.", "Surpri^600ses.", "Cod^300ing.", "Hum^100ans."],
            typeSpeed: 150,
            startDelay: 1500,
            loop: true,
            loopCount: 10,
            backDelay: 2000
        });
})
