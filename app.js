var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind')
var sun = document.querySelector('.sun')
var content = document.querySelector('.content')
var time = document.querySelector('.time')
var body = document.querySelector('body')


async function changeWeatherUI(){
    let capitalSearch = search.value.trim()
    let apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=48d679794a804f8acdeb3f3b3bb0ed70`
    
    let data = await fetch(apiURl).then(res=> res.json())
    console.log(data)
    if(data.cod == 200){
    content.classList.remove('hide')
    city.innerText = data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s'
    sun.innerText = data.main.humidity +'%'
    let temp = Math.round(data.main.temp - 273.15)
    value.innerText = temp
    shortDesc.innerText = data.weather[0]  ? data.weather[0].main:''
    time.innerText = new Date().toLocaleString('vi')

    body.setAttribute('class','warm')
    if(temp > 30){
        body.setAttribute('class','hot')
    }
    if(temp < 30){
        body.setAttribute('class','warm')
    }
    if(temp < 25){
        body.setAttribute('class','cool')
    }
    if(temp < 20){
        body.setAttribute('class','cold')
    }


    }else{
        content.classList.add('hide')
    }
}

search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
       console.log(changeWeatherUI('AAAAA'))
    }
})
