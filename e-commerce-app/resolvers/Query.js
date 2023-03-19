exports.Query = {
    hello: () => { return "Hello World!" },
    age: () => { return 28 },
    salary: () => { return 123456.123 },
    isLive: () => { return false },
    products: (parent, args, { products }) => { return products },
    product: (parent, { id }, { products }) => {

        let result = products.find((product) => product.id === id)
        return result;
    },
    categories: (parent, args, { categories }) => { return categories },
    category: (parent, { id }, { categories }) => {
        let category = categories.find((category) => category.id === id)
        return category;
    }
};