const APIKEY='7a7ac9eca7a1118d64c0f398faf02d3d';
 //* appek a l'API avec ville en parametre de fonction*//
let apicall =function (city) { 

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
response.json().then((data) =>{
    console.log (data);
document.querySelector('#city').innerHTML= data.name;
document.querySelector('#temp').innerHTML= " <i class='wi wi-flood'></i>"+data.main.temp +'°'
document.querySelector('#humidity').innerHTML= " <i class='wi wi-humidity'></i>"+data.main.humidity +'%';
document.querySelector('#wind').innerHTML= " <i class='wi wi-sandstorm'></i>" +data.wind.speed +'km/h';


}
) 

)
.catch((err) => console.log('erreur:' +err));
};
/*ecouteur d'evenement sur la soumission du formulaire*/
document.querySelector('form').addEventListener('submit',function (e) {
    e.preventDefault();
    let ville=document.querySelector('#inputcity').value;
    apicall(ville);
});
 //appele par defaut le chargement de la page 
 apicall('london')
