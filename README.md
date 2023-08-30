this is a simple study using leaflet and geolocalization API's

Just clone and change this line in **server.js** to your API key of geoapify to get your reverse geolocalization 
 
```
var response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${obj.logi}&lon=${obj.lati}&format=json&apiKey=YOUR_key`);
```
also add a mongoDb Atlas URI in .env file

after alterations just run

```
node server.js
```
in this project you can save geographical points in database using your geolocalization, also is possible consulpt the list of points per city in

```
/api/city/YourCityName
```


https://adrielh024.github.io/Leaflet_Geolocalization/
