import User from "../../../server/models/User";
import Game from "../../../server/models/Game";
import Turn from "../../../server/models/Turn";

export default {
  Query: {
    game: async (parent, { _id }, context, info) => {
      return await Game.findOne({ _id }).exec();
    },
    games: async (parent, args, context, info) => {
      const games = await Game.find({})
        .populate()
        .exec();

      const result = games.map(u => ({
        _id: u._id.toString(),
        user: u.user
      }));

      return result;
    }
  },
  Mutation: {
    createGame: async (parent, { game }, context, info) => {
      const newGame = await new Game({
          user: game.user,
      });

      return new Promise((resolve, reject) => {
        newGame.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateGame: async (parent, { _id, game }, context, info) => {
      return new Promise((resolve, reject) => {
        Game.findByIdAndUpdate(_id, { $set: { ...game } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteGame: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Game.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Game: {
    user: async ({ user }, args, context, info) => {

      return new Promise((resolve, reject) => {
        User.findOne({ _id:user }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    turns: async ({ _id }, args, context, info) => {
      return new Promise((resolve, reject) => {
        Turn.find({ game:_id }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
