const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        hello : String
        age: Int
        salary: Float
        isLive: Boolean
        products: [Product!]!
        product(id: String!): Product!
        categories: [Category!]!
        category(id: String!): Category
    }

    type Product {

        id: String!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        # categoryId: String!
        category: Category
    }

    type Category {

        id: String!
        name: String!
        products: [Product!]!
    }
`;