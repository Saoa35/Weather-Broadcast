
let urlKyiv = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let urlLondon = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let urlNewYork = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';

let winterImg = 'url("Winter.jpg") no-repeat',
    springImg = 'url("Spring.jpg") no-repeat',
    summergImg = 'url("Summer.jpg") no-repeat',
    autumngImg = 'url("Autumn.jpg") no-repeat';

let body = document.querySelector('body');

// function bodyBackground() {
//     let background;
//     let currentDate = new Date();
//     let winterDateStart = new Date(2022, 0, 1),
//         springDateStart = new Date(2022, 2, 1),
//         summerDateStart = new Date(2022, 5, 1),
//         autumnDateStart = new Date(2022, 8, 1),
//         winterDateStart2 = new Date(2022, 11, 1);
//     if (currentDate >= winterDateStart || currentDate >= winterDateStart2) {
//         background = winterImg;
//     } else if (currentDate >= springDateStart) {
//         background = springImg;
//     } else if (currentDate >= summerDateStart) {
//         background = summergImg;
//     } else if (currentDate >= autumnDateStart) {
//         background = autumngImg;
//     }
//     return background;
// }

// body.style.background = bodyBackground ();
body.style.background = summergImg;

let footer = document.querySelector('footer');

    function getWearher (url, div) {
        fetch(url) 
                .then(resp => resp.json())
                .then(json => {
                    const cityName = json.name,
                          weatherDescr = json.weather[0].description;
                    let tempCelsius = Math.round(json.main.temp - 273.15) + ' ℃';
                     
                          img = document.createElement('img');
                          img.src = 'http://openweathermap.org/img/wn/' + json.weather[0]['icon'] + '@2x.png';

                          let ul = document.createElement('ul');

                    [cityName, tempCelsius, weatherDescr, img].map(el => {

                        

                        let li = document.createElement('li');

                        li.append(el);

                        ul.append(li);

                       
                    });



                    div.append(ul);

                    // let footer = document.querySelector('footer');
                              footer.addEventListener('click', function() {
                               // if(tempCelsius) {
                                div.textContent = '';
                                    tempCelsius = (parseInt(tempCelsius) * (9/5)) + 32 + ' °F';
                                    [cityName, tempCelsius, weatherDescr, img].map(el => {
                                        let li = document.createElement('li');
                                        li.append(el);
                                        div.append(li);
                                    });
                               // } else tempCelsius;
                              });
                })
                // .then(item => console.log(item))
                .catch(error => console.log(error.message));
    }

    // function changeTempr() {

    // }

    // console.log(new Date());

setInterval(getWearher(urlKyiv, outputKyiv), 300000);
setInterval(getWearher(urlLondon, outputLondon), 300000);
setInterval(getWearher(urlNewYork, outputNewYork), 300000);