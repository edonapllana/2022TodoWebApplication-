const mongoose = require('mongoose');

const readTodos = async(req, res) => {
		const todo = await Todo(req.body);
		try {
			await todo.save();
			res.status(201).json(todo);
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
}

module.exports = {
	readTodos,
}
