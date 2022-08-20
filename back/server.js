const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require(cors);

const app = express();
dotenv.config();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
