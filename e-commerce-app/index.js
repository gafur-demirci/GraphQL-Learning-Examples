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

const categories = [
    {
        id: "1",
        name: "Men"
    },
    {
        id: "2",
        name: "Women"
    },
    {
        id: "3",
        name: "Child"
    }
]

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