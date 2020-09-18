
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var date = document.querySelector('.date');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var latitude = document.querySelector('.lat');
var longitude = document.querySelector('.lon');
var humidity = document.querySelector('.humid');
var wind = document.querySelector('.wind-speed')
var uvIndex = document.querySelector('.uv');
var iconElement = document.querySelector(".weather-icon");
var button= document.querySelector('.submit');

function myFunction(){
  var x = document.getElementById("myInput");
  document.getElementById("search").innerHTML = x.value;
}


button.addEventListener('click', function(name){
  let api1='https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=18072980313b0e42a4d73c6808d4528c';
console.log(api1);
  fetch(api1)
   
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']-273;
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var getLatitude =data['coord']['lat'];
  var getLongitude=data['coord']['lon'];
  var getHumidity = data['main']['humidity'];
  var getWindSpeed =data['wind']['speed']*2.237;
  var getIcon = data['weather'][0]['icon'];

  var temperature = Math.floor(tempValue*9/5 + 32);

  date.innerHTML = new Date();
  main.innerHTML = nameValue;
  desc.innerHTML = "Desc : "+descValue;
 
  temp.innerHTML = "Temp : "+temperature + "°F";
  humidity.innerHTML = "Humidity: " + getHumidity;
  wind.innerHTML = "Wind Speed: " + getWindSpeed + " Miles/Hour";
  iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${getIcon}@2x.png"/>`;
  input.value ="";

  let latValue =getLatitude;
  let lonValue =getLongitude;
  let api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&appid=${'18072980313b0e42a4d73c6808d4528c'}`;
console.log(api2);
  fetch(api2)
  .then(response => response.json())

  .then(data2 => {
  var uvValue = data2['current']['uvi'];
let getDateValue =[];
let getTempDay = [];
let getTempNight = [];
let getUvData = [];

  for (var i=0;i<5;i++){
      getDateValue.push(new Date(data2['daily'][i]['dt']).toString());
  	  getTempDay.push(Math.floor((data2['daily'][i]['temp']['day']-273)*9/5+32));
  	  getTempNight.push(Math.floor((data2['daily'][i]['temp']['night']-273)*9/5+32)); 
      getUvData.push(data2['daily'][i]['uvi']);
 }

uvIndex.innerHTML = "UV Index: " + uvValue;
	
let div = document.createElement('div');
       div.className = 'content';
       div.innerHTML = getDateValue[0] + '<br>' + "UV Index: " + getUvData[0] + '<br>' + "Day Temperature: " + getTempDay[0]+ " °F" + '<br>' + "Night Temperature: " + getTempNight[0] + " °F";
       document.body.appendChild(div);
        
let div2 = document.createElement('div');
        div2.className = 'content2';
        div2.innerHTML = getDateValue[1] + '<br>'+ "UV Index: " + getUvData[1] + '<br>' + "Day Temperature: " + getTempDay[1]+ " °F" + '<br>' + "Night Temperature: " + getTempNight[1] + " °F";
        document.body.appendChild(div2);
let div3 = document.createElement('div');
        div3.className = 'content3';
        div3.innerHTML = getDateValue[2] + '<br>'+ "UV Index: " + getUvData[2] + '<br>' + "Day Temperature: " + getTempDay[2]+ " °F" + '<br>' + "Night Temperature: " + getTempNight[2] + " °F";
        document.body.appendChild(div3);
        
let div4 = document.createElement('div');
        div4.className = 'content4';
        div4.innerHTML = getDateValue[3] + '<br>' + "UV Index: " + getUvData[3] + '<br>' + "Day Temperature: " + getTempDay[3]+ " °F" + '<br>' + "Night Temperature: " + getTempNight[3] + " °F";
        document.body.appendChild(div4);
              
let div5 = document.createElement('div');
        div5.className = 'content6';
        div5.innerHTML = getDateValue[4] + '<br>'+ "UV Index: " + getUvData[4] + '<br>' + "Day Temperature: " + getTempDay[4]+ " °F" + '<br>' + "Night Temperature: " + getTempNight[4] + " °F";
        document.body.appendChild(div5);
 }) 

})
.catch(err => alert("Please Enter City Name"));
})

