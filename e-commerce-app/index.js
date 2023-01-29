const { ApolloServer, gql } = require('apollo-server');

// Scaler Types : String, Int, Float, Boolean

const typeDefs = gql`

    type Query {
        hello : String
        age: Int
        salary: Float
        isLive: Boolean
        products: [Product!]!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }

`;

const resolvers = {
    Query: {
        hello: () => { return "Hello World!" },
        age: () => { return 28 },
        salary: () => { return 123456.123 },
        isLive: () => { return false },
        products: () => {
            return [
                {
                    name: "Black Shoe",
                    description: "New Black Shoes",
                    quantity: 5,
                    price: 100.50,
                    onSale: true
                },
                {
                    name: "White Shoe",
                    description: "New White Shoes",
                    quantity: 6,
                    price: 110.50,
                    onSale: false
                },
                {
                    name: "Red Shoe",
                    description: "New Red Shoes",
                    quantity: 7,
                    price: 120.50,
                    onSale: true
                }
            ]
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Server running on ${url} a live`);
})