
let urlKyiv = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let urlLondon = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let urlNewYork = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';

let backgroundImg = 'url("backgroundImg.jpg") no-repeat';
    
let body = document.querySelector('body');


body.style.background = backgroundImg;

let footer = document.querySelector('footer');

    function getWearher (url, div) {
        fetch(url) 
                .then(resp => resp.json())
                .then(json => {
                    const cityName = json.name;
                    const weatherDescr = json.weather[0].description;
                    
                    let temp = Math.round(json.main.temp - 273.15) + ' ℃';

                    const img = document.createElement('img');
                    img.src = 'http://openweathermap.org/img/wn/' + json.weather[0]['icon'] + '@2x.png';
                    let ul = document.createElement('ul');
                    let tempLi;

                    [cityName, temp, weatherDescr, img].map(el => {
                        let li = document.createElement('li');
                        if(el === temp) {
                            tempLi = li;                        
                        }
                        li.append(el);
                        ul.append(li);
                    });

                    div.append(ul);
                    

                    footer.addEventListener('click', function() {

                        let currentTemp = tempLi.textContent.includes('℃');
                        if(currentTemp) {
                            
                            temp = Math.trunc((parseInt(temp) * (9/5)) + 32) + ' °F';

                            tempLi.textContent = temp;

                            footer.textContent = 'Change to Celsius';

                        
                        } else {
                           
                                temp = Math.round(json.main.temp - 273.15) + ' ℃';
                                tempLi.textContent = temp;
                               
                                footer.textContent = 'Change to Fahrenheit';
                        }
                    });

                })
                .catch(error => console.log(error.message));
    }


setInterval(getWearher(urlKyiv, outputKyiv), 300000);
setInterval(getWearher(urlLondon, outputLondon), 300000);
setInterval(getWearher(urlNewYork, outputNewYork), 300000);