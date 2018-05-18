import { Query } from "mongoose";
import casual from "casual";

const mocks = {
  Query: () => ({
    todo: (root, args) => {
      return {id: args.id};
    }
  }),
  Todo: () => ({
    id: () => casual.integer(1,100),
    version: () => casual.integer(1,10),
    createdAt: () => casual.date(),
    updatedAt: () => casual.date(),
  }),
  Item: () => ({
    id: () => casual.integer(1,100),
    desc: () => casual.description,
    completed: () => casual.boolean,
  })
};

export default mocks;
