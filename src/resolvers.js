const bcrypt = require('bcryptjs');

const resolvers = {
    Query: {
        async allUser(root, args, { models })
        {
          return models.User.findAll()
        },
        async userfindById (root, { id }, { models }) {
          return models.User.findById(id)
        },
    },
    Mutation: {
        async createUser(root, { name, email, password }, { models }) {
          return models.User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
          });
        },
      },
  };
  
  module.exports = resolvers;