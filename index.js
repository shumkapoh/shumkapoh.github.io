// You can use test.json for testing purposes.

var citylabel = document.getElementById("citylabel");
var cityweather = document.getElementById("cityweater");
var cityinput = document.getElementById("cityinput");
var citysearch = document.getElementById("citysearch");
var weathericon = "http://openweathermap.org/img/w/10d.png";

citysearch.addEventListener("click", function(e){

  
})

var url = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=46653c9906b4fde19792459874073e87";

  // axios.get("test.json").then().catch()
  axios.get(url)
  .then(function(response) {

    console.log(response);
    var cityname = response.data.name;
    citylabel.innerText = cityname;
    cityinput.value = "";
  })
  .catch(function(error) {
    // Log Error
  });