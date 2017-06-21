document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    var url = 'http://api.icndb.com/jokes/random',
        button = document.querySelector('#get-joke'),
        paragraph = document.querySelector('#joke');
    
    function getJoke() {
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);
        xhr.addEventListener('load', function () {
            var response = JSON.parse(xhr.response);
            paragraph.innerHTML = response.value.joke;
        });
        xhr.send();
    }
    //Get random joke after load website
    window.addEventListener('load', getJoke);
    //Get random joke after click on button
    button.addEventListener('click', getJoke);   
});