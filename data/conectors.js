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
    addTodoItem(id, desc) {
        const body = { id, desc };     
       
        return fetch(url.resolve(rootURL, 'add_item'), { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => ({id, desc})) 
    },
    removeTodoItem(id, item_id) {

        const body = { id, item_id };     
       
        return fetch(url.resolve(rootURL, 'remove_item'), { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => ({id, item_id}))         
    },

    removeCompleted(id) {
        const body = { id };
        return fetch(url.resolve(rootURL, 'remove_completed'), { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => ({id}))  
    },
    setTodoItemDescription(id, item_id, desc) {
        const body = { id, item_id, desc };
        return fetch(url.resolve(rootURL, 'set_item_desc'), { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => ({id, item_id, desc}))  
    },
    checkTodoItem(id, item_id, checked) {
        const body = { id, item_id, checked };
        return fetch(url.resolve(rootURL, 'check_item'), { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => ({id, item_id, checked}))  
    },
    checkAllTodoItems(id, checked) {
        const body = { id, checked };
        return fetch(url.resolve(rootURL, 'check_all_items'), { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => ({id, checked}))  
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