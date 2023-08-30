this is a simple study using leaflet and geolocalization API's

Just clone and chance this line to your API key of geoapify to get your reverse geolocalization 
'''    
var response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${obj.logi}&lon=${obj.lati}&format=json&apiKey=YOUR_key`);

'''

after alterations just run

'''
node server.js

'''

https://adrielh024.github.io/Leaflet_Geolocalization/
