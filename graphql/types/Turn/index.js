export default `
  type Turn {
    _id: ID!
    turnNumber: Int!
    targetPosition: [Float]!
    error: [Float]!
    game: Game!
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
    targetPosition: [Float]!
    error: [Float]!
    game: ID!
  }

  input UpdateTurnInput {
    turnNumber: Int!
    targetPosition: [Float]!
    error: [Float]!
    game: ID!
  }
`;
