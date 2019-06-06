export default `
  type User implements IEntity {
    _id: ID!
    email: String!
    accessToken: String!
    games: [Game!]
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    user(accessToken: String!): User!
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
