const API_KEY = "api key";

function onGeoOk(position){
    let lat = position.coords.latitude;   // 위도
    let lon = position.coords.longitude;  // 경도
    console.log("You live it", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // fetch 은 당장 일어나지 않고 시간이 좀 걸린뒤 일어나므로 then 사용해야 한다.
    fetch(url)
        .then((response) => response.json())
        .then(data => {
           // console.log(data.weather[0].main);  // 날씨
            console.log(data)
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            // weather.innerText = data.weather[0].main;
            // data.main.temp 온도
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; 
            city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)