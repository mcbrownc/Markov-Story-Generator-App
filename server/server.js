const path = require('path');
const express = require('express');

const app = express();
const PORT = 9500;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));