exports.Category = {
    products: ({ id }, args, { products }) => {

        let result = products.filter((product) => product.categoryId === id)
        return result;
    }
};