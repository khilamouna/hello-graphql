import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      console.log(`Querying user with id: ${id}`);
      const user = users.find((user) => user.id === id);
      console.log("User found:", user);
      return user;
    },
    users: (parent, args, context, info) => {
      return users;
    },
  },
};

export default resolvers;
