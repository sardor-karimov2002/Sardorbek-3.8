// o'zgarmas teliklarimizni belgilab oldik 
const ON_FOOT=3.6;
const BICYCLE=20.1;
const CAR=70;
const PLANE=800;

// dom bln ishlash yani htmldagi clas input va buttonni chaqirib oldik

var formEl=document.getElementById('form');
var inputEl=document.querySelector('.input');
var onfootEl=document.querySelector('.onfoot');
var bicycleEl=document.querySelector('.bicycle');
var carEl=document.querySelector('.car');
var planeEl=document.querySelector('.plane')

//form da hodisa ro'y berganda amallar bajarilishi
formEl.addEventListener('submit',function(evt){
    evt.preventDefault()// zapros bo'lganini bizga ko'rsatish uchun to'xtatib qo'ydik
    let distance=inputEl.value;// bu kirtilgan haqqiy masofa olindi
    onfootEl.textContent=getTime(distance,ON_FOOT) //vaqtni topilishi va hmlga uzatilishi 
    bicycleEl.textContent=getTime(distance,BICYCLE)//vaqtni topilishi va hmlga uzatilishi 
    carEl.textContent=getTime(distance,CAR)//vaqtni topilishi va hmlga uzatilishi 
    planeEl.textContent=getTime(distance,PLANE)//vaqtni topilishi va hmlga uzatilishi 
})

//bu funksiya vatqni topish funksiyasi masofani tezlikka bo'lib beradi
function getTime(distanceEl,sped){ //distanceEl bu yerda kiritilayotgan masofa ,sped bu o'rtacha tezligi
    let time =distanceEl/sped //topilish jarayoni
    return normalizeTime(time) // va bizga qaytarsin shu natijani
}

// chiqgan natijanini yani vaqtni saotga minutga aytlantrish uchun function yozildi
function normalizeTime (time){
    let hour = Math.floor(time) //soatga aytlantrilishi
    console.log(hour)
    let minute =Math.ceil((time-hour)*60) //minutga aylantrilishi
    let hourString =!hour ? `` : `${hour} soat` // va chiroyli xolatga op kelinishi
    return hourString +"  "+ `${minute} minut`// va bizga shu natijani qaytarsin
}