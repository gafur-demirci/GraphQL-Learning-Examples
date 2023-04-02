import { ApolloServer } from 'apollo-server';
import { Category } from './resolvers/Category.js';
import { Product } from './resolvers/Product.js';
import { Query } from './resolvers/Query.js';
import { categories, products, reviews } from './data.js';
import { typeDefs } from './schema.js';

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category
    },
    context: {
        products,
        categories,
        reviews,
    }
})

server.listen().then(({ url }) => {
    console.log(`Server running on ${url} a live`);
})