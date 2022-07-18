const express = require('express');
const cors = require('cors');
let data = require('./data');

const app = express();

app.use(express.json());

app.use(cors());

app.get(["/", "/home"], (req,res) => {
    res.json(data)
})

module.exports = app;