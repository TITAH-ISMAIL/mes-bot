const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express()

app.set("port", process.env.PORT || 8000);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Chat bot web app for messenger')
})

app.get('/webhook', function (req, res) {
    const PAGE_VERF_TOKEN = 'our chat bot @ app'

    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (token === PAGE_VERF_TOKEN) {
        res.status(200).send(challenge)
    }else {
        res.status(403)
    }
})

app.listen(app.get('port'), function () {
    console.log('server is running and listentining ' + app.get('port'));
})


