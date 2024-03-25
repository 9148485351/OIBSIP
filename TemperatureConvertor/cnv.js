let Celsiusinput = document.querySelector('.Celcius >input ')
let Farenheitinput = document.querySelector('.Farenheit >input')
let Kelvininput = document.querySelector('.Kelvin >input')

let btn = document.querySelector(".sub > button")

function roundnumber(number){
    return number
}

Celsiusinput.addEventListener('input',function(){
    let ctemp = parseFloat(Celsiusinput.value)
    let ftemp = ctemp*(9/5)+32
    let ktemp = ctemp + 273.1 

    Farenheitinput.value = roundnumber(ftemp)
    Kelvininput.value = roundnumber(ktemp)
})

Farenheitinput.addEventListener('input',function(){
    let ftemp = parseFloat(Farenheitinput.value)
    let ctemp = (ftemp-32) * 5/9 
    let ktemp = ctemp + 273.15

    Celsiusinput.value = roundnumber(ctemp)
    Kelvininput.value = roundnumber(ktemp)
})
Kelvininput.addEventListener('input',function(){
    let ktemp = parseFloat(Kelvininput.value)
    let ftemp = (ktemp - 273.15)* 9/5 + 32
    let ctemp = ktemp - 273.5

    Farenheitinput.value = roundnumber(ftemp)
    Celsiusinput.value = roundnumber(ctemp)
})

btn.addEventListener('click',()=>{
    Celsiusinput.value=""
    Farenheitinput .value=""
    Kelvininput.value=""

})