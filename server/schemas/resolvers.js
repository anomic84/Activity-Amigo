const { User, Posts } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                    _id: context.user._id,
                }).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            //  logs in a user with their email and password.
            const user = await User.findOne({ email });
            // checks if a user with the given email exists in the database.
            if (!user) {
                throw new AuthenticationError('No user found with this email.');
            }
            // checks if the password provided matches the user's password in the database.
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect password');
            }
            // generates a JWT for the logged-in user.
            const token = signToken(user);
            return { token, user };
        },
        // adds a new user to the database.
        newUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        getUserByName: async (parent, args) => {
            if(args.username) {
                const user = await User.findOne(
                  {username: args.username}
                
                )
                return { user }

            }else if (args.email) {
                const user = await User.findOne(
                    {email: args.email}
                )
            }
        },

        createPost: async (parent, args) => {
         const post = await Posts.create(args)
            return { post }
        },

        updatePost: async (parent, { _id, data }) => {
            const post = await Posts.findOneAndUpdate(
                {_id}, 
                {$set: data},
                {new: true}
            )
            return { post }
        },

        // getUserPost: async (parent, args) => {

        // }



        deletePost: async (parent, { _id }) => {
            const post = await Posts.findByIdAndDelete(
                {_id}
            )
        return { message: "Post deleted", success: true }

      },

      createComment: async (parent, args ) => {
    
      },

      deleteComment: async (parent, { _id }) => {
        const comment = await Posts.findByIdAndDelete(
          
        )
      },

      updateComment: async (parent, { _id, comment: commentId}) {
        
      },



    

  updateComment: async (parent, { _id, comment: commentId}) {
        
      }


    }

    
}