import fetch from 'node-fetch';

const Todo = {
    allTodos() {
        return fetch('http://localhost:8080/api/todos/')
        .then(res => res.json())
        .then(todos => {
            return todos.map((todo) => {
               return mapTodo(todo)
            })
        })
    },
    todo(id) {

    }
}

function mapTodo(todo) {
    todo.createdAt = todo.created_at;
    todo.updatedAt = todo.updatedAt;
    todo.items = todo.items.map((item) => {
        item.todo = todo;
        return item;
    });
    return todo;
}

export {Todo}