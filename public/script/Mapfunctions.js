var x;
var y;
function success(position) {
    x = position.coords.latitude;
    y = position.coords.longitude;
    var marker = L.marker([x, y]).addTo(map);
    console.log(x,y);
}
function error(){
    console.log("error");
}
navigator.geolocation.getCurrentPosition(success, error);


var map = L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    
var marker = L.marker([x, y]).addTo(map);

