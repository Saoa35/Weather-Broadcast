let output = document.getElementById('output');

let urlKyiv = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let urlLondon = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let urlNewYork = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';

function getData (url) {
    fetch(url) 
                .then(resp => resp.json())
                .then(json => {
                    output.textContent = '';
                    output.textContent += '  ' + json.name;
                    output.textContent += '  ' + json.weather[0].description;
                    
                })
                // .then(item => console.log(item))
                .catch(error => console.log(error.message));
}

getData(urlKyiv);