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
  Mutation: {
    createUser: (parent, { id, name, email, age }, context, info) => {
      const newUser = { id, name, email, age };
      users.push(newUser);
      return newUser;
    },
    updateUser: (parent, { id, name, email, age }, context, info) => {
      let newUser = users.find((user) => user.id === id);
      newUser.name = name;
      newUser.email = email;
      newUser.age = age;
      return newUser;
    },
    deleteUser: (parent, { id }, context, info) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) throw new Error("User not found");
      const deletUsers = users.splice(userIndex, 1);

      return deletUsers[0];
    },
  },
};

export default resolvers;
