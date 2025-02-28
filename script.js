document.addEventListener("DOMContentLoaded", () =>{
    if("geolocation" in  navigator){
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                console.log(lat)
                console.log(lon)
                checkWeatrherByLocation(lat, lon);
            },
            (error)=>{
                    console.log("Denied");
            }
        );
    }else{
        console.log("Not Supported");
        
    }
});

const apiKey = "6f2130fb539110902675c006d424e7df";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";



const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeatrherByCity(city) {
    const response = await fetch(apiUrl+`&q=`+city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "images/wind.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
   


}

async function checkWeatrherByLocation(lat, lon) {
    const response = await fetch(apiUrl + `&lat=${lat}` + `&lon=${lon}` + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
     

    }
    else{
        const data = await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "images/wind.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeatrherByCity(searchBox.value);
})
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}