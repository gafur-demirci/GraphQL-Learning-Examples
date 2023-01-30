const { ApolloServer, gql } = require('apollo-server');

// Scaler Types : String, Int, Float, Boolean
const products = [
    {
        id: "1",
        name: "Black Shoe",
        description: "New Black Shoes",
        quantity: 5,
        price: 100.50,
        onSale: true
    },
    {
        id: "2",
        name: "White Shoe",
        description: "New White Shoes",
        quantity: 6,
        price: 110.50,
        onSale: false
    },
    {
        id: "3",
        name: "Red Shoe",
        description: "New Red Shoes",
        quantity: 7,
        price: 120.50,
        onSale: true
    }
];

const typeDefs = gql`

    type Query {
        hello : String
        age: Int
        salary: Float
        isLive: Boolean
        products: [Product!]!
        product(id: String!): Product!
    }

    type Product {
        id: String!
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
        products: () => { return products },
        product: (parent, args, context) => { 

            let result = products.filter((product) => product.id === args.id )
            return result[0];
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