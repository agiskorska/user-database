const express = require('express');
const cors = require('cors');
let data = require('./data');

const app = express();

app.use(express.json());

app.use(cors());

app.get(["/", "/home"], (req,res) => {
    res.json(data)
});

app.post( "/newuser", (req, res) => {

    const ip = req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    null;
    const id = data.length
    const newEntry = {
        id: id,
        first_name: req.body.name,
        last_name: req.body.surname,
        email: req.body.email,
        gender: req.body.gender,
        ip_address: ip
    };

    data.push(newEntry);
    res.status(201).send(newEntry);
});

app.put('/user/:id', (req, res) => {
    const filteredData = data.filter(item => {
        if(item.id == req.params.id) {
            item["first_name"] = req.body.name
            item["last_name"] = req.body.surname
            item["email"] = req.body.email
            item["gender"] = req.body.gender
            res.send(item)
        }
    })
    if( filteredData.length == 1) {
        res.status(200)
    } else {
        res.send("<h1>Sorry, no user with this ID found</h1>").status(404)
    }
})

module.exports = app;