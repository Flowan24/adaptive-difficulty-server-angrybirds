export default `
  type Game {
    _id: ID!
    user: User!
    turns: [Turn!]!
  }

  type Query {
    game(_id: ID!): Game!
    games: [Game!]!
  }

  type Mutation {
    createGame(game: CreateGameInput!): Game!
    updateGame(_id: ID!, game: UpdateGameInput): Game!
    deleteGame(_id: ID!): Game!
  }

  input CreateGameInput {
    user: ID!
  }

  input UpdateGameInput {
    user: ID!
  }
`;
