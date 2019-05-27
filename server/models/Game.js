import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const GameSchema = new Schema({
  totalTurns: {
    type: Number,
    unique: true,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  turns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Turn"
    }
  ]
});

export default mongoose.model("Game", GameSchema);
