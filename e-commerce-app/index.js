const { ApolloServer, gql } = require('apollo-server');
const { products, categories } = require('./data.js');

const typeDefs = gql`

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
    }

    type Category {

        id: String!
        name: String!
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

            let result = products.find((product) => product.id === args.id)
            return result;
        },
        categories: () => { return categories },
        category: (parent, args, context) => {
            let category = categories.find((category) => category.id === args.id)
            return category;
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