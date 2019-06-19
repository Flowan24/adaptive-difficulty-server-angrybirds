export default `
  type Game implements IEntity {
    _id: ID!
    user: User
    turns: [Turn]
    createdAt: String!
    updatedAt: String!
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
