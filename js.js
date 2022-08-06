
let urlKyiv = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let urlLondon = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let urlNewYork = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';

let springImg = 'url("Spring.jpg") no-repeat',
    summergImg = 'url("Summer.jpg") no-repeat';

let body = document.querySelector('body');


body.style.background = summergImg;

let footer = document.querySelector('footer');

    function getWearher (url, div) {
        fetch(url) 
                .then(resp => resp.json())
                .then(json => {
                    const cityName = json.name;
                    const weatherDescr = json.weather[0].description;
                    let tempCelsius = Math.round(json.main.temp - 273.15) + ' ℃';
                    const img = document.createElement('img');
                    img.src = 'http://openweathermap.org/img/wn/' + json.weather[0]['icon'] + '@2x.png';
                    
                    let ul = document.createElement('ul');

                    [cityName, tempCelsius, weatherDescr, img].map(el => {
                        let li = document.createElement('li');
                        li.append(el);
                        ul.append(li);
                    });

                    div.append(ul);

                    footer.addEventListener('click', function() {
                    // if(tempCelsius) {
                    div.textContent = '';
                    tempCelsius = Math.trunc((parseInt(tempCelsius) * (9/5)) + 32) + ' °F';
                    let ul = document.createElement('ul');

                    [cityName, tempCelsius, weatherDescr, img].map(el => {
                        let li = document.createElement('li');
                        li.append(el);
                        ul.append(li);
                    });

                        div.append(ul);

                    footer.textContent = 'Change to Celsius';
                    // } else tempCelsius;
                });

                })
                .catch(error => console.log(error.message));
    }

    // function changeTempr() {

    // }

setInterval(getWearher(urlKyiv, outputKyiv), 300000);
setInterval(getWearher(urlLondon, outputLondon), 300000);
setInterval(getWearher(urlNewYork, outputNewYork), 300000);