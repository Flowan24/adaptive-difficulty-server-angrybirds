export default `
  type Turn implements IEntity {
    _id: ID!
    turnNumber: Int
    targetPosition: [Float]
    error: [Float]
    game: Game
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    turn(_id: ID!): Turn!
    turns: [Turn!]!
  }

  type Mutation {
    createTurn(turn: CreateTurnInput!): Turn!
    updateTurn(_id: ID!, turn: UpdateTurnInput): Turn!
    deleteTurn(_id: ID!): Turn!
  }

  input CreateTurnInput {
    turnNumber: Int!
    targetPosition: [Float!]!
    error: [Float!]!
    game: ID!
  }

  input UpdateTurnInput {
    turnNumber: Int!
    targetPosition: [Float!]!
    error: [Float!]!
    game: ID!
  }
`;
