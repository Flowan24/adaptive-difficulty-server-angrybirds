import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const TurnSchema = new Schema({
  turnNumber: {
    type: Number,
    required: true
  },
  targetPosition: {
    type:[Number],
    required: true
  },
  error: {
    type:[Number],
    required: true
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game"
  }
},{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

export default mongoose.model("Turn", TurnSchema);
