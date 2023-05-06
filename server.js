var express = require('express');
const mongoose = require('mongoose');
var app = express();

app.use(express.static('public'));

const { Schema } = mongoose;

const point = new Schema({
    title:String,
    location:{
        type:{
            type: String,
            enum:['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

point.path('_id');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })
 
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })