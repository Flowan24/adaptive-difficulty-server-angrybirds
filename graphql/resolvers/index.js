import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Game from "./Game/";
import Turn from "./Turn/";
const resolvers = [User, Game, Turn];

export default mergeResolvers(resolvers);
