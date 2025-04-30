let Current_date = new Date
let monthes = ["January" , "February" , "March"  ,"April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
let clock = document.querySelector(".clock")
let date = document.querySelector(".date")
let name_search = document.querySelector(".search-custom")
let temp_city = document.querySelector(".temp-city")
let cityname = document.querySelector(".name-city")
let iconweather = document.getElementById("icon-weather")
let feeltemp = document.querySelector(".temp-feel")
let textfeel = document.getElementById("text-feel")
let maxtemp = document.querySelector(".max-temp")
let mintemp = document.querySelector(".min-temp")
let textmaxtemp = document.querySelector(".text-max-temp")
let textmintemp = document.querySelector(".text-min-temp")
let textspeedwind = document.querySelector(".speedwindtext")
let textdegreewind = document.querySelector(".winddegreetext")
let speedwind = document.querySelector(".windspeed")
let degreewind = document.querySelector(".winddegree")
let logo_down = document.querySelector(".logo-down")
let visibilititext = document.querySelector(".visibilititext")
let visibiliti = document.querySelector(".visibiliti")
let pressuretext = document.querySelector(".pressuretext")
let pressure = document.querySelector(".pressure")
let click = document.querySelector("button")
let maintemplate = document.querySelector(".main-bg")
let humiditytext = document.querySelector(".humiditytext")
let humidity = document.querySelector(".humidity")
let sea_leveltext = document.querySelector(".sea_leveltext")
let sea_level = document.querySelector(".sea_level")
//-----------------------------------------------------------------------------------------------------------------------------------------------

date.innerHTML = monthes[Current_date.getMonth()] +" "+Current_date.getDate()
clock.innerHTML = Current_date.getHours() + ":" + Current_date.getMinutes()

function eventapi (){
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+name_search.value +"&appid=200902f64510ca9f52f398ef82b2f8e9")
   .then(res => res.json())
   .then((data) => {
      console.log(data)
       cityname.innerHTML = data.name + " , " +data.sys.country
       temp_city.innerHTML =  Math.round(data.main.temp - 273.15) +"°" 
       feeltemp.innerHTML = Math.round(data.main.feels_like - 273.15) +"°"
       textfeel.innerHTML = " Realfeel : "
       maxtemp.innerHTML = Math.round(data.main.temp_max -273.15)
       textmaxtemp.innerHTML = "max temp :"
       mintemp.innerHTML = Math.round(data.main.temp_min -273.15)
       textmintemp.innerHTML = "min temp :"
       textspeedwind.innerHTML = "Wind Gusts :"
       textdegreewind.innerHTML = "wind degree :"
       visibilititext.innerHTML = "power of vision :"
       visibiliti.innerHTML = (data.visibility-1000 ) + "km"
       pressuretext.innerHTML ="pressure : "
       pressure.innerHTML =data.main.pressure + "mb"
       degreewind.innerHTML = data.wind.deg + "°"
       speedwind.innerHTML = data.wind.speed + " km/h"
       humiditytext.innerHTML = "humidity :"
       humidity.innerHTML = data.main.humidity + "%"
       sea_leveltext.innerHTML = "height of the see :"
       sea_level.innerHTML = data.main.sea_level + "m"
    if(data.weather[0].description === 'clear sky' ){
       iconweather.setAttribute("class" , "bx bx-sun")
    }else if(data.weather[0].description === 'broken clouds' ){
       iconweather.setAttribute("class" , "bx bx-cloud-light-rain")
    } else if (data.weather[0].description === 'overcast clouds'){
       iconweather.setAttribute("class" , "bx bxs-cloud-lightning")
    } else if (data.weather[0].description === 'mist' || data.weather[0].description === 'haze' || data.weather[0].description === "few clouds"){
       iconweather.setAttribute("class" , "bx bxl-soundcloud")
    }
      
   })
}
function Regularevents (event) {
   event.preventDefault()
maintemplate.style.height = "auto"
}


name_search.addEventListener("keydown" , (event) => {
   
   if(event.which == 13){
      Regularevents(event)
      eventapi()
   }
})









