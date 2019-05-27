import Turn from "../../../server/models/Turn";
import Game from "../../../server/models/Game";

export default {
  Query: {
    turn: async (parent, { _id }, context, info) => {
      return await Turn.findOne({ _id }).exec();
    },
    turns: async (parent, args, context, info) => {
      const games = await Turn.find({})
        .populate()
        .exec();

      const result = games.map(u => ({
        _id: u._id.toString(),
        game: u.game,
        turnNumber: u.turnNumber,
        targetPosition: u.targetPosition,
        error: u.error
      }));

      return result;
    }
  },
  Mutation: {
    createTurn: async (parent, { turn }, context, info) => {
      const newTurn = await new Turn({
          game: turn.game,
          turnNumber: turn.turnNumber,
          targetPosition: turn.targetPosition,
          error: turn.error
      });

      return new Promise((resolve, reject) => {
        newTurn.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateTurn: async (parent, { _id, turn }, context, info) => {
      return new Promise((resolve, reject) => {
        Game.findByIdAndUpdate(_id, { $set: { ...turn } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteTurn: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Game.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Turn: {
    game: async ({ game }, args, context, info) => {
      return new Promise((resolve, reject) => {
        Game.findOne({ _id:game }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
