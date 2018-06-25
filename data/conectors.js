import fetch from 'node-fetch';

const TodoList = {
    allTodoLists() {
        return fetch('http://localhost:8080/api/todos/')
        .then(res => res.json())
        .then(todoList => {
            return todoList.map((todoList) => {
               return mapTodoList(todoList)
            })
        })
    },
    todoList(id) {
        this.allTodoLists()
        .then(todoList => {
            return todoList[0];
        })
    }
    
}

function mapTodoList(todoList) {
    todoList.createdAt = todoList.created_at;
    todoList.updatedAt = todoList.updatedAt;
    todoList.items = todoList.items.map((item) => {
        item.todoList = todoList;
        return item;
    });
    return todoList;
}

export { TodoList }