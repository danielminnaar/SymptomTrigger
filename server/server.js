var express = require('express');
//var Repository = require('mongoRepository').Repository;
var app = express();

http = require('http');
var path = require('path');
server = http.createServer(app);
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var mongoUrl = 'mongodb://localhost:27017/SymptomTrigger';


app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    })
});

app.get('/doit', function (req, res) {
    console.log('sending doit...');
    res.send('hello world!');
});

app.post('/addSymptom', function (req, res) {
  
//    symptomRepo.add({ name: 'IBS'});
//    
//    console.log('added');
//    
//    symptomRepo.find({}, function(results) {
//        console.log('Symptom: ' + results[0].name);    
//    });
    
    
//    var newSymptom = req.body.name;
//    console.log(newSymptom);
    res.send(JSON.stringify({
        result: 'success'
    }));
});

server.listen(5000);
console.log("Listening on 5000");