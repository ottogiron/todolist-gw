import fetch from 'node-fetch';
import url from 'url';

const rootURL = 'http://localhost:8080/api/todos/';

const TodoList = {
    allTodoLists() {
        return fetch(rootURL)
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
    },
    removeItem(id, item_id) {

        const body = { id, item_id };     
        console.log(JSON.stringify(body));
        return fetch(url.resolve(rootURL, 'remove_item'), { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => ({id, item_id}))         
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