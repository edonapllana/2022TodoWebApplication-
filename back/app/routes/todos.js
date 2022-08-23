const router = require('express').Router();

const todosController = require('./../controllers/todosController');

router.get('/', todosController.readTodos);
router.post('/', todosController.createTodos);

module.exports = router;
