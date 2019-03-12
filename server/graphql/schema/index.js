const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  _id: ID!
  email: String!
  password: String
  name: String!
  phone_num: String!
  companies: [Company!]
}

type Company {
  _id: ID!
  name: String!
  email: String!
  phone_num: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: Int!
  unlimited_tier: Boolean!
  credits: Int!
  users: [User!]!
}

type Invoice {
  _id: ID!
  invoice_num: Number!
  company: [Company!]!
  customer: [Customer!]!
  items: [Item!]!
  due_date: String!
  subtotal: Number!
  discount: Number!
  shipping: Number!
  tax: Number!
  total_cost: Number!
  paid: Boolean!
  archive: Boolean!
}

type Item {
  _id: ID!
  description: String!
  quantity: Number!
  rate: Number!
  amount: Number!
}

input CompanyInput {
  name: String!
  email: String!
  phone_num: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: Int!
}

input EditCompanyInput {
  _id: ID
  name: String
  email: String
  phone_num: String
  address_1: String
  address_2: String
  city: String
  state: String
  postal_code: Int
}

input UserInput {
  email: String!
  password: String!
  name: String!
  address: String!
  phone_num: String!
}

type Customer {
  _id: ID!
  name: String!
  address: String!
  email: String!
  phone_num: String!
  companies: [Company!]!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input CustomerInput {
  name: String!
  address: String!
  email: String!
  phone_num: String!
}

input CustomerUpdate {
  name: String
  address: String
  email: String
  phone_num: String
}

type RootQuery {
  login(email: String!, password: String!): AuthData!
  users: [User!]!
  companyByAnyField(companyInput: EditCompanyInput): [Company!]
  companies: [Company!]!
  company(companyID: ID!): Company
  customers: [Customer!]!
  customer(_id:ID!): Customer!
}

type RootMutation {
  createUser(userInput: UserInput): User
  createCompany(companyInput: CompanyInput): Company
  editCompany(companyInput: EditCompanyInput, id: ID!): Company
  createCustomer(customerInput: CustomerInput): Customer
  updateCustomer(_id: ID!, customerUpdate: CustomerUpdate!) : Customer
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
