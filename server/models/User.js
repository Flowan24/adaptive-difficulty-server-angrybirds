import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  accessToken: {
    type: String,
    unique: true,
    required: true
  },
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ]
});

export default mongoose.model("User", UserSchema);
