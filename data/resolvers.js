import { Todo } from './conectors'

const resolvers = {
    Query: {
      todo(root, args) {
        return { id: 1, version: 2, items: [], createdAt: "", updatedAt:""};
      },
      allTodos() {
        return Todo.allTodos()
      }
    },
    Todo: {
      items(todo) {
        return todo.items;
      }
    },
    Item: {
      todo(item) {
        return item.todo;
      }
    }
  };
  
  export default resolvers;