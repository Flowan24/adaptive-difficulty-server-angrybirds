import User from "../../../server/models/User";
import Game from "../../../server/models/Game";

export default {
  Query: {
    user: async (parent, { accessToken }, context, info) => {
      return await User.findOne({ accessToken }).exec();
    },
    users: async (parent, args, context, info) => {
      const users = await User.find({})
        .populate()
        .exec();

      return users.map(u => ({
        _id: u._id.toString(),
        email: u.email,
        games: u.games,
        accessToken: newAccessToken
      }));
    }
  },
  Mutation: {
    createUser: async (parent, { user }, context, info) => {
      let newAccessToken=Math.random().toString(36).substring(8);
      const newUser = await new User({
        email: user.email,
        games: user.games,
        accessToken: newAccessToken
      });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateUser: async (parent, { _id, user }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(_id, { $set: { ...user } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  User: {
    games: async ({ _id }, args, context, info) => {
      return new Promise((resolve, reject) => {
        Game.find({ user:_id }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
