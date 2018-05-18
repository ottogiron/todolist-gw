const resolvers = {
    Query: {
      todo(root, args) {
        return { id: 1, version: 2, items: [], createdAt: "", updatedAt:""};
      },
      allTodos() {
        return [{ id: 1, version: 2, items: [], createdAt: "", updatedAt:""}];
      }
    },
    Todo: {
      items(todo) {
        return [
          { id: 1, desc: "Item 1", completed: false},
          { id: 2, desc: "Item 2", completed: true},
        ];
      }
    },
    Item: {
      todo(item) {
        return { id: 1, version: 2};
      }
    }
  };
  
  export default resolvers;