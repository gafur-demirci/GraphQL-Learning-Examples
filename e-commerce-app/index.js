const { ApolloServer, gql } = require('apollo-server');

// Scaler Types : String, Int, Float, Boolean

const typeDefs = gql`

    type Query {
        hello : String
        age: Int
        salary: Float
        isLive: Boolean
    }

`;

const resolvers = {
    Query: {
        hello: () => { return "Hello World!" },
        age: () => { return 28 },
        salary: () => { return 123456.123 },
        isLive: () => { return false },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(( { url} ) => {
    console.log(`Server running on ${url} a live`);
})