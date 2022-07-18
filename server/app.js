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
    const newEntry = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        ip_address: req.body.ip_address
    };
    data.push(newEntry);
    res.status(201).send(newEntry);
});

module.exports = app;