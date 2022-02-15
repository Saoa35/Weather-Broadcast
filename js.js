
let urlKyiv = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let urlLondon = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let urlNewYork = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';


    function getWearher (url, div) {
        fetch(url) 
                .then(resp => resp.json())
                .then(json => {
                    const cityName = json.name,
                          weatherDescr = json.weather[0].description,
                          tempCelsius = Math.round(json.main.temp - 273.15) + ' ℃',
                          img = document.createElement('img');
                          img.src = 'http://openweathermap.org/img/wn/' + json.weather[0]['icon'] + '@2x.png';

                    [cityName, tempCelsius, weatherDescr, img].map(el => {
                        let li = document.createElement('li')
                        li.append(el);
                        div.append(li);
                    });
                })
                // .then(item => console.log(item))
                .catch(error => console.log(error.message));
    }

setInterval(getWearher(urlKyiv, outputKyiv), 600000);
setInterval(getWearher(urlLondon, outputLondon), 600000);
setInterval(getWearher(urlNewYork, outputNewYork), 600000);