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
      removeTodoItem(root, args) {
        return TodoList.removeTodoItem(args.input.id, args.input.item_id);
      }, 
      addTodoItem(root, args) {
        return TodoList.addTodoItem(args.input.id, args.input.desc);
      },
      removeCompleted(root, args) {
        return TodoList.removeCompleted(args.id);
      },
      setTodoItemDescription(root, args) {
        return TodoList.setTodoItemDescription(args.input.id, args.input.item_id, args.input.desc);
      },
      checkTodoItem(root, args) {
        return TodoList.checkTodoItem(args.input.id, args.input.item_id, args.input.checked);
      }, 
      checkAllTodoItems(root, args) {
        return TodoList.checkAllTodoItems(args.input.id, args.input.checked);
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