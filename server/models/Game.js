import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const GameSchema = new Schema({
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
},{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

export default mongoose.model("Game", GameSchema);
