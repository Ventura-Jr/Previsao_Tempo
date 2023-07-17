const Key = "fb1a9052e549db71e6311b36228f4900"

function putDataOnScreen(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = "Temperatura de " + Math.floor(data.main.temp) + " °C"
    document.querySelector(".forecast").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade " + data.main.humidity + " %"
    document.querySelector(".img-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function findCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&lang=pt_br&units=metric`).then(response => response.json())
    
    putDataOnScreen(data)
}

function clickFind() {
    const city = document.querySelector(".input-city").value

    findCity(city)
}