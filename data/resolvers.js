import { TodoList } from './conectors'

const resolvers = {
    Query: {
      todoList(root, args) {
       return TodoList.allTodoLists()
       .then((todoList) => {
          return todoList[0];
       });        
      },
      allTodoLists() {
        return TodoList.allTodoLists()
      }
    },
    Mutation: {
      removeTodo(root, args) {
        return TodoList.removeItem(args.input.id, args.input.item_id);
      }
    },
    TodoList: {
      items(todoList) {
        return todoList.items;
      }
    },
    Item: {
      todoList(item) {
        return item.todo;
      }
    }
  };
  
  export default resolvers;