const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        hello : String
        age: Int
        salary: Float
        isLive: Boolean
        products(filter: ProductsFilterInput): [Product!]!
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
        category: Category
        reviews: [Review!]!
    }

    type Category {

        id: String!
        name: String!
        products(filter: ProductsFilterInput): [Product!]! # products'i filterelemek icin update edildi.
    }

    type Review {
        id: String!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }
`;