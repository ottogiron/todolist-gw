import { Todo } from './conectors'

const resolvers = {
    Query: {
      todo(root, args) {
       return Todo.allTodos()
       .then((todos) => {
          return todos[0];
       });        
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