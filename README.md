<h1 align="center">
<br>
  <a href="https://github.com/leonardomso/xo"><img src="https://i.imgur.com/C4X4AUB.png" alt="GraphQL MongoDB Server" width="128"></a>
<br>
<br>
GraphQL MongoDB Server
</h1>

<p align="center">A server boilerplate using GraphQL and MongoDB.</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Introduction

This is a server boilerplate using GraphQL and MongoDB. Support subscriptions using GraphQL Yoga.

## Getting started

1. Clone this repo using `https://github.com/leonardomso/graphql-mongodb-server.git`
2. Move to the appropriate directory: `cd graphql-mongodb-server`.
4. Run `yarn` or `npm install` to install dependencies.
5. Set `.env` file with your mongoURI.
6. Run `npm start` to see the example app at `http://localhost:4000/playground`.

## Commands

- `npm start` - start the playground at `http://localhost:4000/playground`

--
## License

MIT license, Copyright (c) 2018 Leonardo Maldonado.


# Write your query or mutation here

`query getUser($userAccesstoken:String!) {
  user(accessToken:$userAccesstoken)
  {_id,email,accessToken,createdAt,updatedAt,games{_id}}
}
query getGame {
  game(_id:"5cf925235d97fc21ecd63fcc")
  {_id,user{_id,accessToken,email},createdAt,updatedAt, turns{_id,error}}
}
query getTurn {
  turn(_id:"5cf9252e5d97fc21ecd63fcd")
  {_id,turnNumber,error,,createdAt,updatedAt,targetPosition,game{_id}}
}

query users{ users{_id, email, games {_id}}}
query games{ games{_id, user{accessToken,email}}}
query turns{ turns{_id, turnNumber,targetPosition}}

mutation createGame($cg: CreateGameInput!) {
  createGame(game: $cg) {_id}
}
mutation CreateUser($cu: CreateUserInput!) {
  createUser(user: $cu) {_id, accessToken}
}
mutation createTurn($ct: CreateTurnInput!) {
  createTurn(turn: $ct) {_id}
}`

Variables
`{
  "userAccesstoken":"c8js",
  "cg": {
    "user": "5cf924ed5d97fc21ecd63fcb"
  },
  "cu": {"email": "test3@test.at"},
  "ct": {
    "game":"5cf925235d97fc21ecd63fcc",
    "turnNumber": 1,
    "targetPosition": [6.024816036224365,-3.5],
    "error": [-2.7630248069763185,-0.45874953269958498]
  }
}`
