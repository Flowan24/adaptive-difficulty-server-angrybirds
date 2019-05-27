export default `
  type User {
    _id: ID!
    email: String!
    games: [Game!]
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: String!, user: UpdateUserInput!): User!
    deleteUser(_id: String!): User!
  }

  input CreateUserInput {
    email: String!
  }

  input UpdateUserInput {
    email: String
  }
`;
