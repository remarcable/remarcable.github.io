$(document).ready(function () {
  outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: ''
    });
  $('.video').vide('img/whiteboard/White-Board', {
    posterType: 'jpg',
    resizing: false,
    bgColor: '#333333'
  });
})
