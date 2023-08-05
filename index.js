const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express()

app.set("port", process.env.PORT || 8000);

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Chat bot web app for messenger')
})

app.listen(app.get('port'),function(){
    console.log('server is running and listentining ' + app.get('port'));
})


