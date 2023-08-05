var express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
var app = express();
const bodyParser = require('body-parser');
const fetch = require("node-fetch");


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mySecret = process.env['MONGO_URI'];

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mySecret);
}

const Art  = new mongoose.Schema({
  name: String,
  author_id: String,
  longi: String,
  lati: String,
  cidade: String
});

const art = new mongoose.model('Art',Art);

app.get('/', function (req, res) {
    res.sendFile("index.html" );
 })
 
 app.post('/api',async (req,res)=>{
   const obj = req.body;
   console.log(obj.lati + " " + obj.logi);
   


   try{
    var response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${obj.logi}&lon=${obj.lati}&format=json&apiKey=7402c93da75c429f921df8320aca7b68`);
    const data = await response.json();
    console.log(data.results[0].city);
    let pic = new art({
      name:obj.name,
      author_id:obj.authorname,
      longi:obj.logi,
      lati: obj.lati,
      cidade: data.results[0].city
     });
    await pic.save();
   }catch(err){
    console.log(err);
   }
   res.json({"res":200});
 })

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })