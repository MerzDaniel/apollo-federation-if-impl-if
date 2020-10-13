const { buildFederatedSchema } = require('@apollo/federation')
const { gql } = require('apollo-server-express')


const typeDefs = gql`
  interface A { text: String }
  interface B implements A { text: String number: Int} 
`

const resolvers = {}

buildFederatedSchema([{ typeDefs, resolvers }])