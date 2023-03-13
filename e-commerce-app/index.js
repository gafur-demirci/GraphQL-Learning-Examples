const { ApolloServer } = require('apollo-server');
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { typeDefs } = require('./schema')

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category
    }
})

server.listen().then(({ url }) => {
    console.log(`Server running on ${url} a live`);
})