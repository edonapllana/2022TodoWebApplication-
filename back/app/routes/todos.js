const router = require('express').Router();

const todosController = require('./../controllers/todosController');

router.get('/', todosController.readTodos);
router.post('/', todosController.createTodos);
router.patch('/', todosController.updateTodos);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
