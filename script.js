const apiKey = "7fcc8488d3cc6d409225d4e88228aeee";
function fetchWeather(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city + "&units=metric&appid=" 
    + apiKey
    )
    .then(res => res.json())
    .then(data => displayWeather(data));
}

function displayWeather(data){
    const {name} = data;
    const {temp} = data.main;
    const {icon, description} = data.weather[0];
    //console.log(name, temp, icon, description);
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".description").innerText = description;
    document.querySelector(".weather").classList.remove("loading");
}
// function search(){
//     fetchWeather(document.querySelector(".search-bar").value);
// }
document.querySelector(".search-btn").addEventListener("click",function(){
    fetchWeather(document.querySelector(".search-bar").value);
    document.querySelector(".search-bar").value="";
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        fetchWeather(document.querySelector(".search-bar").value);
        document.querySelector(".search-bar").value="";
    }
})

fetchWeather("Dhaka");

