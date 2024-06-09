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
        async allProperties(root, args, { models })
        {
          return models.Property.findAll()
        },
    },
    Mutation: {
        async createUser(root, { name, email, password }, { models }) {
          return models.User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
          }); 

        },// Create USer
        
        async createProperty(root, { id, propertyid, imageUrl, address, description, price, bedRooms, 
                                     bathRooms, sqFeet, garages, time, moreImagesUrl_1, moreImagesUrl_2, isFav, 
                                     longitude, latitude}, { models }) {
          return models.Property.create({
            id, propertyid, imageUrl, address, description, price, bedRooms, 
            bathRooms, sqFeet, garages, time, moreImagesUrl_1, moreImagesUrl_2, isFav, 
            longitude, latitude,
          }); 

        }, // Create Property
      },
  };
  
  module.exports = resolvers;