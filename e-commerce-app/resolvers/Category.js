const { products } = require('../data');

exports.Category = {
    products: (parent, args, context) => {

        let result = products.filter((product) => product.categoryId === parent.id)
        return result;
    }
};