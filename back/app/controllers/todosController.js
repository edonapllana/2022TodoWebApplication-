const mongoose = require('mongoose');
const Todo = require('./../models/todos.js');

const readTodos = async(req, res) => {
		const todo = await Todo(req.body);
		try {
			await todo.save();
			res.status(201).json(todo);
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
}

const createTodos = async(req, res) => {
	const todo = await Todo(req.body);
	try {
		await todo.save();
		res.status(201).json(todo);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
}

const updateTodos = async(req, res) => {
	const {id} = req.params;
	const {title, content} = req.body;
	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).send(`Your id ${id} isn't valid!`)
	}
	const todo = {title, content, _id:id};
	await Todo.findByIdAndUpdate(id, 
		todo, 
		{new: true})
		res.json(todo);
}

const deleteTodo = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`Your id ${id} isn't valid!`);
	}
	await Todo.findByIdAndRemove(id);
	
	res.json(todo);
};

module.exports = {
	readTodos,
	createTodos,
	updateTodos,
	deleteTodo
};
