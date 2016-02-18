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
            strings: ["Kaff^200ee.", "Mu^400sik.", "Inter^200net.", "Überraschung^600en."],
            typeSpeed: 150,
            startDelay: 1500,
            loop: true,
            loopCount: 10,
            backDelay: 2000
        });
})
