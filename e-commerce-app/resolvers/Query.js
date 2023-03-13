const { products, categories }  = require('../data');

exports.Query = {
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
};