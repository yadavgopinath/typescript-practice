import Router from 'express';
const router = Router();
import { Todo } from '../models/todos';  

const todos: Todo[] = []; 

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res) => {
    const newTodo: Todo = {  
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo added', todo: newTodo });
});

router.put('/todo/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const newText = req.body.text;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex].text = newText;
        res.status(200).json({ message: 'Todo updated', todo: todos[todoIndex] });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
router.delete('/todo/:todoId', (req, res) => {
    const todoId = req.params.todoId;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex >= 0) {
        const deletedTodo = todos.splice(todoIndex, 1);
        res.status(200).json({ message: 'Todo deleted', todo: deletedTodo[0] });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

export default router;
