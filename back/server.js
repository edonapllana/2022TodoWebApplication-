const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const { mongoUri } = require('./app/const/config');
const todosRoutes = require('./app/routes/todos');

const app = express();
dotenv.config();
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/todos', todosRoutes);

app.get("/", async(req, res) => {
	res.json({
		success: true, 
		message: "Welcome to the TODO Server!"
	})
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
